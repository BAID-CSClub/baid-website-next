<template>
  <div class="h-100vh">
    <div class="font-black">
      <div class="text-10 font-black text-[var(--standard-red)] tracking--0.8">
        全面的学生指导
      </div>
      <div class="text-gray-400 m-t--2.5 text-4.5">Student Guidance</div>
    </div>
    <div>
      <div class="m-t-8 text-6 tracking-wider">>>>心理指导</div>
      <div
        class="bg-pink w-full h-55vw rd-5 m-t-5 shadow-xl"
        style="
          background: url(https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
          background-size: cover;
        "
      ></div>
    </div>
    <div>
      <div class="m-t-8 text-6 tracking-wider">>>>升学指导</div>
      <div
        class="bg-purple w-full h-55vw rd-5 m-t-5 shadow-xl flex flex-col justify-end overflow-clip p-3 box-border"
        style="
          background: url(https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
          background-size: cover;
        "
      >
        <div class="text-6 font-black">
          {{ $t('EducationTeaching.StudentGuidance.Content.Title') }}
        </div>
        <div class="m-l-2">
          {{ $t('EducationTeaching.StudentGuidance.Content.Description') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
