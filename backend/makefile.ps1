$BINARY          = "strapicms"
$FULL_ZIP        = "$BINARY.zip"
$CURRENT_DIR     = $PSScriptRoot
$BUILD_DIR       = "$CURRENT_DIR\build"

if (Test-Path $FULL_ZIP) {
    Remove-Item $FULL_ZIP -Force
}

Invoke-Expression "npm run build"

Compress-Archive -Path "$BUILD_DIR\*" -DestinationPath $FULL_ZIP -Force

if (Test-Path $BUILD_DIR) {
    Remove-Item $BUILD_DIR -Recurse -Force
}
