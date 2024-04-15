@echo off

rem Defina o caminho da pasta onde você deseja abrir o terminal
set "caminho_da_pasta=D:\Projeto Sabespe\Sabespe\projeto-sabespe\Sabespe\resources\app"

rem Abra o terminal na pasta especificada e execute o comando ng build
start cmd /k "cd /d %caminho_da_pasta% && npm run build"

rem Aguarde um tempo para o comando ser concluído (ajuste conforme necessário)
timeout /t 5 >nul

rem Feche o terminal
taskkill /f /im cmd.exe
