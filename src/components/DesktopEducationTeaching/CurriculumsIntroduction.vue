<template>
  <div class="section">
    <NotFancyTitle cn="课程体系" en="Curriculums" color="blue"></NotFancyTitle>
    <div class="flex gap-16">
      <div class="w-full">
        <CurriculumBlock
          :number="number1"
          title="EducationTeaching.Curriculums.1.Title"
          description="EducationTeaching.Curriculums.1.Description"
        ></CurriculumBlock>
        <CurriculumBlock
          :number="number2"
          title="EducationTeaching.Curriculums.2.Title"
          description="EducationTeaching.Curriculums.2.Description"
        ></CurriculumBlock>
      </div>
      <hr />
      <div class="w-full">
        <CurriculumBlock
          :number="number3"
          title="EducationTeaching.Curriculums.3.Title"
          description="EducationTeaching.Curriculums.3.Description"
        ></CurriculumBlock>
      </div>
    </div>
  </div>
</template>
<script setup>
import NotFancyTitle from '../NotFancyTitle.vue'
import CurriculumBlock from './CurriculumBlock.vue'

import number1 from '../../assets/images/Number_1.svg'
import number2 from '../../assets/images/Number_2.svg'
import number3 from '../../assets/images/Number_3.svg'
</script>
