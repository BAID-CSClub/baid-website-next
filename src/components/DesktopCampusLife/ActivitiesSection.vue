<template>
  <section class="section">
    <NotFancyTitle cn="学生活动" en="Activities" color="red"></NotFancyTitle>

    <!-- 这里是不是可以参考一下我改的那个 LearningMethod 但是这个悬停效果怎么做呀 -->
    <div id="selector" class="flex justify-center">
      <div id="selected" style="flex: 3;">
        <h2 class="selectedText ml-5 font-sans color-white mt-85 text-9 mb-0">
          {{ $t('CampusLife.Activities.Selected.Title') }}
        </h2>
        <p class="selectedText ml-5 font-sans color-white text-7 mt-3 mb-0">
          {{ $t('CampusLife.Activities.Selected.Description') }}
        </p>
      </div>
      <div class="flex-col">
        <div id="options" class="flex-col flex">
          <div id="option1" class="option flex-row flex border b-1 bg-white">
            <div id="option1Text" style="width: 175px; height: 115px" class="optionContainer">
              <p class="optionDate ml-5 font-sans color-[var(--standard-blue)] text-6 mt-3 mb-0">
                {{ $t('CampusLife.Activities.Option1.Date') }}
              </p>
              <p class="optionText ml-5 font-sans color-[var(--standard-blue)] text-6 mt-2">
                {{ $t('CampusLife.Activities.Option1.Title') }}
              </p>
            </div>
            <img :src="homeBg1" class="optionImg" />
          </div>
          <div id="option2" class="option flex-row flex border b-1 bg-white">
            <div id="option2Text" style="width: 175px; height: 115px" class="optionContainer">
              <p class="optionDate ml-5 font-sans color-[var(--standard-blue)] text-6 mt-3 mb-0">
                {{ $t('CampusLife.Activities.Option2.Date') }}
              </p>
              <p class="optionText ml-5 font-sans color-[var(--standard-blue)] text-6 mt-2">
                {{ $t('CampusLife.Activities.Option2.Title') }}
              </p>
            </div>
            <img :src="homeBg1" class="optionImg" />
          </div>
          <div id="option3" class="option flex-row flex border-lightblue b-1 bg-white">
            <div id="option3Text" style="width: 175px; height: 115px" class="optionContainer">
              <p class="optionDate ml-5 font-sans color-[var(--standard-blue)] text-6 mt-3 mb-0">
                {{ $t('CampusLife.Activities.Option3.Date') }}
              </p>
              <p class="optionText ml-5 font-sans color-[var(--standard-blue)] text-6 mt-2">
                {{ $t('CampusLife.Activities.Option3.Title') }}
              </p>
            </div>
            <img :src="homeBg1" class="optionImg" />
          </div>
          <div id="option4" class="option flex-row flex border-lightblue b-1 bg-white">
            <div id="option3Text" style="width: 175px; height: 115px" class="optionContainer">
              <p class="optionDate ml-5 font-sans color-[var(--standard-blue)] text-6 mt-3 mb-0">
                {{ $t('CampusLife.Activities.Option4.Date') }}
              </p>
              <p class="optionText ml-5 font-sans color-[var(--standard-blue)] text-6 mt-2">
                {{ $t('CampusLife.Activities.Option4.Title') }}
              </p>
            </div>
            <img :src="homeBg1" class="optionImg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import NotFancyTitle from '../NotFancyTitle.vue'
</script>

<style scoped>
.option {
  border-color: rgba(157, 186, 224, 1);
  border-right-style: none;
  width: 352px;
  height: 115px;
}

.optionImg {
  width: 175px;
  height: 115px;
}

.option:hover {
  background-color: var(--standard-red);
  width: 398px;
  height: 158px;
}

.option:hover .optionImg {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 192px;
  height: 139px;
}

.option:hover .optionContainer {
  width: 398px;
  height: 158px;
}

.option:hover .optionDate {
  color: white;
}

.option:hover .optionText {
  color: white;
}

.optionDate {
  width: 130px;
  word-break: break-all;
  white-space: pre-line;
  letter-spacing: 2px;
  color: rgba(103, 115, 148, 1);
}

.optionText {
  width: 130px;
  word-break: break-all;
  white-space: pre-line;
  letter-spacing: 2px;
}

.selectedText {
  width: 800px;
  word-break: break-all;
  white-space: pre-line;
}

#selected {
  background: url('../../assets/images/campusBg2.jpg?webp') no-repeat content-box;
}
</style>
