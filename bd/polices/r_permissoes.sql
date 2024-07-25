DO 
$do$
/*inicio_comando*/
DECLARE
	VRec RECORD;
	VRecObjetos RECORD;
BEGIN

	FOR VRec IN
	
		SELECT	REPLACE(CURRENT_DATABASE(), '_db', '') nome_referencia
			,CURRENT_DATABASE() nome_base

	LOOP
		
		IF NOT EXISTS (SELECT 1 
						FROM pg_roles 
						WHERE  rolname = 'usuarios' || VRec.nome_referencia ||''
					) THEN
			EXECUTE 'CREATE ROLE usuarios' || VRec.nome_referencia || ' VALID UNTIL ''infinity'';';
		END IF;
		  
		IF NOT EXISTS (SELECT 1 
						FROM pg_roles 
						WHERE  rolname = VRec.nome_referencia || '_usr'
					) THEN
			EXECUTE 'CREATE ROLE ' || VRec.nome_referencia || '_usr LOGIN PASSWORD ''postgres'' VALID UNTIL ''infinity'';';
		END IF;
		  
		IF NOT EXISTS (SELECT 1 
					FROM pg_roles 
					WHERE  rolname = VRec.nome_referencia || '_dba'
					) THEN
			EXECUTE 'CREATE ROLE ' || VRec.nome_referencia || '_dba LOGIN PASSWORD ''postgres'' VALID UNTIL ''infinity'';';
		END IF;

		/* Usuários e Grupos */
		EXECUTE '

			GRANT usuarios' || VRec.nome_referencia || ' TO ' || VRec.nome_referencia || '_usr;				
			ALTER DATABASE ' || VRec.nome_base || ' OWNER TO ' || VRec.nome_referencia || '_dba;
			ALTER SCHEMA public OWNER TO ' || VRec.nome_referencia || '_dba;				
			GRANT ALL ON SCHEMA public TO ' || VRec.nome_referencia || '_dba;
			GRANT USAGE ON SCHEMA public TO usuarios' || VRec.nome_referencia || ';';
				
		FOR VRecObjetos IN

			SELECT	pt.schemaname
				,pt.tablename
			FROM	pg_tables pt
			WHERE	pt.schemaname = 'public'
			
			UNION ALL
			
			SELECT	pv.schemaname
				,pv.viewname
			FROM	pg_views pv
			WHERE	pv.schemaname = 'public'
			ORDER BY
				1
				,2

		LOOP
			
			EXECUTE 'ALTER TABLE public.' || VRecObjetos.tablename || ' OWNER to ' || VRec.nome_referencia || '_dba;
				GRANT ALL ON TABLE public.' || VRecObjetos.tablename || ' TO ' || VRec.nome_referencia || '_dba;
				GRANT DELETE, UPDATE, INSERT, SELECT ON TABLE public.' || VRecObjetos.tablename || ' TO usuarios' || VRec.nome_referencia || ';';

		END LOOP;
		
		FOR VRecObjetos IN
		
			SELECT	pp.proname nome_funcao
				,COALESCE(pg_catalog.pg_get_function_arguments(pp.oid), '') argumentos
			FROM	pg_proc pp
			WHERE	pp.pronamespace = 2200
			AND	pp.proname ILIKE 'f_%'
			ORDER BY
				pp.proname
		
		LOOP
			
			EXECUTE 'ALTER FUNCTION public.' || VRecObjetos.nome_funcao || ' OWNER TO ' || VRec.nome_referencia || '_dba;
				GRANT EXECUTE ON FUNCTION public.' || VRecObjetos.nome_funcao || ' TO ' || VRec.nome_referencia || '_dba;
				GRANT EXECUTE ON FUNCTION public.' || VRecObjetos.nome_funcao || ' TO usuarios' || VRec.nome_referencia || ';
				REVOKE ALL ON FUNCTION public.' || VRecObjetos.nome_funcao || ' FROM public;';

		END LOOP;			


	END LOOP;

END
/*fim_comando*/
$do$;