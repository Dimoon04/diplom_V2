<template>
    <div class="instruction_body">
      <NavMenu></NavMenu>
      <div class="instruction-container mx-auto max-w-xl p-4 pt-6 pb-8">
        <h3 class="text-lg font-bold mb-4">Руководство пользователя</h3>
        <div class="guide">
          <p class="text-gray-600 mb-4">
            <b class="text-lg">Цель:</b><br>
            Веб-приложение "Сканер IMEI" предназначено для защиты граждан от покупки краденных мобильных устройств. Приложение содержит базу данных краденных мобильных устройств (реестр). Используя это приложение, вы можете проверить, является ли мобильное устройство краденным или нет.
          </p>
  
          <br>
          <p class="text-gray-600 mb-4">
            <b class="text-lg">Как использовать приложение:</b>
          </p>
          <ol class="list-decimal list-inside mb-4">
            <li>
              Получение кода IMEI:
              <ul class="list-disc list-inside mb-4">
                <li>Открояте раздел "Телефон" в приложении "Сканер IMEI".</li>
                <li>Введите код *#06# для получения кода IMEI вашего мобильного устройства.</li>
                <li>Сделайте снимок экрана</li>
              </ul>
            </li>
            <li>
              Сканинг кода IMEI:
              <ul class="list-disc list-inside mb-4">
                <li>Перейдите на веб-приложение "Сканер IMEI".</li>
                <li>Вставьте сделанный снимок экрана в поле главной страницы.</li>
                <li>Как только вставите рисунок, приложение отсканирует нужный imei код с рисунка и начнет проверку.</li>
              </ul>
            </li>
            <li>
              Проверка результатов:
              <ul class="list-disc list-inside mb-4">
                <li>Если мобильное устройство не включено в реестр краденных устройств, вы увидите сообщение, указывающее, что устройство не найдено.</li>
                <li>Если мобильное устройство включено в реестр, вы увидите подробный отчет, содержащий следующую информацию: <b>название устройства, цвет устройства, код IMEI, описание отличительных признаков</b></li>
              </ul>
            </li>
          </ol>
  
          <p class="text-gray-600 mb-4">
            <b class="text-lg">Важные заметки:</b>
          </p>
          <ul class="list-disc list-inside mb-4">
            <li>Веб-приложение "Сканер IMEI" только проверяет, включено ли мобильное устройство в реестр краденных устройств. Оно не гарантирует, что устройство не крадено или что оно в хорошем состоянии.</li>
            <li>Реестр краденных устройств обновляется регулярно, но он не исчерпывающий. Возможно, краденное устройство не включено в реестр.</li>
            <li>Веб-приложение "Сканер IMEI" не отвечает за любые убытки или повреждения, вызванные использованием краденного мобильного устройства.</li>
          </ul>
  
          <p class="text-gray-600 mb-4">
            <b class="text-lg">Как сообщить о краденом устройстве:</b>
          </p>
          <p class="text-gray-600 mb-4">
            Если вы считаете, что ваше мобильное устройство было крадено, вы можете сообщить об этом властям и также подать заявку в веб-приложение "Сканер IMEI". Это поможет обновить реестр краденных устройств и предотвратить продажу или использование устройства другими лицами.
          </p>
  
          <br>
          <p class="text-gray-600 mb-4">
            <b class="text-lg">Контактные данные:</b>
          </p>
          <p class="text-gray-600 mb-4">
            Если у вас есть вопросы о веб-приложении "Сканер IMEI", пожалуйста, свяжитесь с нами по телефону 8-996-263-50-32.
          </p>
        </div>
      </div>
      <BottomUi></BottomUi>
    </div>
  </template>
  
  <script>
  import NavMenu from "@/components/NavMenu.vue";
  import BottomUi from "../components/BottomUi.vue";
  
  export default {
    components: {
      NavMenu,
      BottomUi,
    },
  };
  </script>
  
  <style scoped>
  .instruction_body {
    min-height: 100vh;
  }
  .instruction-container {
    min-height: 100vh;
  }
  </style>