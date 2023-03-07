# A Simpler Way of Dumping Modules Needed for Sleirsgoevy's ROP Compiler

If you have difficulties with Sleirsgoevy's method of dumping the necessary modules for setting up the ROP compiler, you can download the "dumps.rar" archive that contains already dumped modules. Alternatively, follow these steps for an automated and successful approach:

## Instructions

<details>
<summary>Instructions (in English)</summary>

| Step | Action |
|------|--------|
| 1 | Install the latest version of Node.js (required for the server). |
| 2 | Run the `setup.bat` batch file to install the required node modules. |
| 3 | Run the `startServer.bat` batch file. This server receives data sent from the page and writes it to the respective module file on your computer. |
| 4 | Edit the `hostIP` variable value in `dumper.js` to match your computer's IP Address, where the server is running. |
| 5 | Host the exploit page by running Ali-Azif's Exploit Self Host Executable. |
| 6 | Press the button corresponding to the module you wish to dump, and the server/page will take care of everything for you. Please avoid touching the controller until you see the message
</details>

<details>
<summary>Instructions (in Arabic)</summary>

| الخطوة | الإجراء |
|--------|--------|
| 1    | تثبيت آخر نسخة من Node.js (المطلوبة للخادم). |
| 2    | تشغيل ملف `setup.bat` لتثبيت وحدات الأنماط اللازمة. |
| 3    | تشغيل ملف `startServer.bat`. يستقبل الخادم البيانات المرسلة من الصفحة ويكتبها في ملف الوحدة المناسبة على جهاز الكمبيوتر الخاص بك. |
| 4    | تعديل قيمة متغير `hostIP` في `dumper.js` لتتطابق مع عنوان IP الخاص بجهاز الكمبيوتر الذي يشغل الخادم. |
| 5    | استضافة صفحة استغلال عن طريق تشغيل برنامج Ali-Azif's Exploit Self Host. |
| 6    | اضغط على الزر الذي يتوافق مع الوحدة التي تريد إلغاء تنشيطها، وسوف يهتم الخادم/الصفحة بكل شيء بالنيابة عنك. من فضلك، تجنب لمس جهاز التحكم حتى ترى الرسالة "[+] تم إلغاء تنشيط اسم الوحدة بنجاح!". |
</details>
<details>
  <summary>Instructions (in Russian)</summary>

| Шаг | Действие |
|------|--------|
| 1    | Установите последнюю версию Node.js (необходимо для сервера). |
| 2    | Запустите файл `setup.bat`, чтобы установить необходимые модули для узла. |
| 3    | Запустите файл `startServer.bat`. Этот сервер получает данные, отправленные со страницы, и записывает их в соответствующий файл модуля на вашем компьютере. |
| 4    | Измените значение переменной `hostIP` в `dumper.js`, чтобы совпадало с IP-адресом вашего компьютера, где запущен сервер. |
| 5    | Хостинг страницы эксплойта, запустив Ali-Azif's Exploit Self Host. |
| 6    | Нажмите кнопку, соответствующую модулю, который вы хотите выгрузить, и сервер/страница все сделает за вас. Пожалуйста, не
</details>



This automated approach has been successful for me, and it should be similarly effective for others experiencing issues with dumping the necessary modules.

## Contact

If you have any questions or need help dumping the modules, feel free to contact me over at Discord: a0zhar#9539.
