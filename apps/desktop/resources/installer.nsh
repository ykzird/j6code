!include "StrFunc.nsh"
!ifdef BUILD_UNINSTALLER
  ${UnStrRep}
  !define J6StrRep '${UnStrRep}'
!else
  ${StrRep}
  !define J6StrRep '${StrRep}'
!endif

!macro customAppRunningMessages
  Push $0
  Push $1
  ${If} $IsPowerShellAvailable == 0
    System::Call 'kernel32::SetEnvironmentVariable(t "J6CODE_INSTALL_DIR", t "$INSTDIR")'
    nsExec::ExecToStack `"$PowerShellPath" -NoProfile -NonInteractive -C "Get-CimInstance -ClassName Win32_Process | Where-Object { $$_.ExecutablePath -and [IO.Path]::GetDirectoryName($$_.ExecutablePath) -eq $$env:J6CODE_INSTALL_DIR } | ForEach-Object { [IO.Path]::GetFileNameWithoutExtension($$_.ExecutablePath) } | Where-Object { $$_ -in 'J6 Code (Alpha)', 'J6 Code (Beta)', 'J6 Code (Nightly)' } | Select-Object -First 1 | ForEach-Object { [Console]::Write($$_) }"`
    Pop $0
    Pop $1
    System::Call 'kernel32::SetEnvironmentVariable(t "J6CODE_INSTALL_DIR", p 0)'
    ${If} $0 == 0
      ${If} $1 == "J6 Code (Alpha)"
      ${OrIf} $1 == "J6 Code (Beta)"
      ${OrIf} $1 == "J6 Code (Nightly)"
        ${J6StrRep} $appRunningMessage $appRunningMessage "${PRODUCT_NAME}" $1
        ${J6StrRep} $appClosingMessage $appClosingMessage "${PRODUCT_NAME}" $1
        ${J6StrRep} $appCannotBeClosedMessage $appCannotBeClosedMessage "${PRODUCT_NAME}" $1
      ${EndIf}
    ${EndIf}
  ${EndIf}
  Pop $1
  Pop $0
!macroend

!macro customInstall
  !ifndef DO_NOT_CREATE_START_MENU_SHORTCUT
    ${IfNot} ${FileExists} "$newStartMenuLink"
      !insertmacro createMenuDirectory
      CreateShortCut "$newStartMenuLink" "$appExe" "" "$appExe" 0 "" "" "${APP_DESCRIPTION}"
      ClearErrors
      WinShell::SetLnkAUMI "$newStartMenuLink" "${APP_ID}"
    ${EndIf}
  !endif
!macroend
