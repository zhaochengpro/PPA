<template>
  <Header />
  <div class="video_content">
    <video loop autoplay>
      <source src="@/assets/index.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="web-main">
    <div class="faq">
      <div class="wrap">
        <!-- <div class="container">
          
        </div> -->
        <div class="accordion">
          <div class="column-card" :class="{ active: activeCard === 0 }" :key="0" @click.prevent="cardChange(0)">
            <div class="title">{{ t("faq.explain1") }}</div>
            <div class="content">
              <p>{{ t("faq.explain1_1") }}</p>
              <p>{{ t("faq.explain1_2") }}</p>
              <p>{{ t("faq.explain1_3") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 0 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
          <div class="column-card" :class="{ active: activeCard === 1 }" :key="0" @click.prevent="cardChange(1)">
            <div class="title">{{ t("faq.explain2") }}</div>
            <div class="content">
              <p>{{ t("faq.explain2_1") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 1 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
          <div class="column-card" :class="{ active: activeCard === 2 }" :key="0" @click.prevent="cardChange(2)">
            <div class="title">{{ t("faq.explain3") }}</div>
            <div class="content">
              <p>{{ t("faq.explain3_1") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 2 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
          <div class="column-card" :class="{ active: activeCard === 3 }" :key="0" @click.prevent="cardChange(3)">
            <div class="title">{{ t("faq.explain4") }}</div>
            <div class="content">
              <p>{{ t("faq.explain4_1") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 3 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>

          <div class="column-card" :class="{ active: activeCard === 4 }" :key="0" @click.prevent="cardChange(4)">
            <div class="title">{{ t("faq.explain5") }}</div>
            <div class="content">
              <p>{{ t("faq.explain5_1") }}</p>
              
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 4 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>

          <div class="column-card" :class="{ active: activeCard === 5 }" :key="0" @click.prevent="cardChange(5)">
            <div class="title">{{ t("faq.explain6") }}</div>
            <div class="content">
              <p>{{ t("faq.explain6_1") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 5 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
          <div class="column-card" :class="{ active: activeCard === 6 }" :key="0" @click.prevent="cardChange(6)">
            <div class="title">{{ t("faq.explain7") }}</div>
            <div class="content">
              <p>{{ t("faq.explain7_1") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 6 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
          <div class="column-card" :class="{ active: activeCard === 7 }" :key="0" @click.prevent="cardChange(7)">
            <div class="title">{{ t("faq.explain8") }}</div>
            <div class="content">
              <p>{{ t("faq.explain8_1") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 7 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
          <div class="column-card" :class="{ active: activeCard === 8 }" :key="0" @click.prevent="cardChange(8)">
            <div class="title">{{ t("faq.explain9") }}</div>
            <div class="content">
              <p>{{ t("faq.explain9_1") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 8 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
          <div class="column-card" :class="{ active: activeCard === 9 }" :key="0" @click.prevent="cardChange(9)">
            <div class="title">{{ t("faq.explain10") }}</div>
            <div class="content">
              <p>{{ t("faq.explain10_1") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 9 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
          <div class="column-card" :class="{ active: activeCard === 10 }" :key="0" @click.prevent="cardChange(10)">
            <div class="title">{{ t("faq.explain11") }}</div>
            <div class="content">
              <p>{{ t("faq.explain11_1") }}</p>
              <p>{{ t("faq.explain11_2") }}</p>
              <p>{{ t("faq.explain11_3") }}</p>
            </div>
            <a class="swtich" href="#">
              <svg :style="{ transform: activeCard === 10 ? 'rotate(0deg)' : 'rotate(90deg)' }" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z">
                </path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import { useI18n } from '@/locales';

const t = useI18n();
const activeCard = ref(-1);
const cards = [];

function cardChange(index) {
  if (activeCard.value == index) {
    activeCard.value = -1;
  } else {
    activeCard.value = index;
  }

}
</script>

<style lang="scss" scoped>

:deep(html, body) {
  overflow: scroll!important;;
}
.video_content {
  position: absolute;
  z-index: -1;
  filter: blur(3px);
}
.wrap {
  width: 100vw;
  z-index: 100;
  // margin: 0;
}
.faq {
  // overflow: scroll;
}


.accordion {
  height: 100vh;
  box-sizing: content-box;
    padding-bottom: 70px;
}
</style>
