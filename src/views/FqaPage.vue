<template>
  <Header />
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
              <p>{{ t("faq.explain1_4") }}</p>
              <p>{{ t("faq.explain1_5") }}</p>
              <p>{{ t("faq.explain1_6") }}</p>
              <p>{{ t("faq.explain1_7") }}</p>
              <p>{{ t("faq.explain1_8") }}</p>
              <p>{{ t("faq.explain1_9") }}</p>
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
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain2_2") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain2_3") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain2_4") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain2_5") }}</p>
              <p>{{ t("faq.explain2_6") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain2_7") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain2_8") }}</p>
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
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain3_2") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain3_3") }}</p>
              <p>{{ t("faq.explain3_4") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain3_5") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain3_6") }}</p>
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
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain4_2") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain4_3") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain4_4") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain4_5") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain4_6") }}</p>
              <p>{{ t("faq.explain4_7") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain4_8") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain4_9") }}</p>
              <p>{{ t("faq.explain4_10") }}</p>
              <table style="border:1px solid #ccc;">
                <thead>
                  <tr>
                    <td style="border-bottom: 1px solid #ccc;">{{ t("faq.explain4_11_1") }}</td>
                    <td style="border-bottom: 1px solid #ccc;">{{ t("faq.explain4_11_2") }}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A1</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>A2</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>A3</td>
                    <td>300</td>
                  </tr>
                  <tr>
                    <td>A4</td>
                    <td>650</td>
                  </tr>
                  <tr>
                    <td>A5</td>
                    <td>2000</td>
                  </tr>
                  <tr>
                    <td>A6</td>
                    <td>/</td>
                  </tr>
                </tbody>
              </table>
              <p>{{ t("faq.explain4_12") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain4_13") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain4_14") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain4_15") }}</p>
              <p>{{ t("faq.explain4_16") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain4_17") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain4_18") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain4_19") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain4_20") }}</p>
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
              <p>{{ t("faq.explain5_2") }}</p>
              <p>{{ t("faq.explain5_3") }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain5_4") }}</p>
              <table style="border:1px solid #ccc;">
                <thead>
                  <tr>
                    <td style="border-bottom: 1px solid #ccc;">{{ t("faq.explain5_4_1") }}</td>
                    <td style="border-bottom: 1px solid #ccc;">{{ t("faq.explain5_4_2") }}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ 100}}</td>
                    <td>{{ t("faq.explain5_4_3") }}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>{{ t("faq.explain5_4_4") }}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>{{ t("faq.explain5_4_5") }}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>{{ t("faq.explain5_4_6") }}</td>
                  </tr>
                </tbody>
              </table>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ t("faq.explain5_5") }}</p>
              <table style="border:1px solid #ccc;">
                <thead>
                  <tr>
                    <td style="border-bottom: 1px solid #ccc;">{{ t("faq.explain5_5_5") }}</td>
                    <td style="border-bottom: 1px solid #ccc;">{{ t("faq.explain5_4_2") }}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ 100}}</td>
                    <td>{{ t("faq.explain5_5_1") }}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>{{ t("faq.explain5_5_2") }}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>{{ t("faq.explain5_5_3") }}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>{{ t("faq.explain5_5_4") }}</td>
                  </tr>
                </tbody>
              </table>
              <p>{{ t("faq.explain5_6") }}</p>
              <p>{{ t("faq.explain5_7") }}</p>
              <p>{{ t("faq.explain5_8") }}</p>
              <p>{{ t("faq.explain5_9") }}</p>
              <p>{{ t("faq.explain5_10") }}</p>
              <p>{{ t("faq.explain5_11") }}</p>
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
const activeCard = ref(0);
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

</style>
