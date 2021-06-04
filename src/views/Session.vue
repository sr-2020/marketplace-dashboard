<template>
  <div class="container">
    <div class="row" v-if="session">
      <div class="col-m-3">
        <h2>Основная информация</h2>
        <h3>Номера циклов / пересчетов</h3>
        <table>
          <tr>
            <td>Игровой:</td>
            <td>{{ session.cycle.number }}</td>
          </tr>
          <tr>
            <td>Пересчет персонажей:</td>
            <td>{{ charBeat.number }}</td>
          </tr>
          <tr>
            <td>Пересчет товаров:</td>
            <td>TBR</td>
          </tr>
        </table>

        <!-- Инфо по персонажам -->
        <h3>Информация о последнем пересчете персонажей</h3>
        <table>
          <tr>
            <td colspan="2">
              <h3 class="header">Персонажи</h3>
            </td>
          </tr>
          <tr>
            <td>Пересчитанные персонажи:</td>
            <td>{{ charBeat.count }}</td>
          </tr>
          <tr>
            <td>Банкроты</td>
            <td>{{ charBeat.insolvent }}</td>
          </tr>
          <tr>
            <td>Иридиевые</td>
            <td>{{ charBeat.irridium }}</td>
          </tr>
          <tr>
            <td colspan="2">
              <h3 class="header">Статистика счетов игроков</h3>
            </td>
          </tr>
          <tr>
            <td>Всего средств на счетах</td>
            <td>{{ charBeat.sumAll }}</td>
          </tr>
          <tr>
            <td>Самый "Богатый"</td>
            <td>{{ charBeat.max }}</td>
          </tr>
          <tr>
            <td>Самый "Бедный"</td>
            <td>{{ charBeat.min }}</td>
          </tr>
          <tr>
            <td colspan="2">
              <h3 class="header">Прогнозы (Через 3 цикла)</h3>
            </td>
          </tr>
          <tr>
            <td>Всего средств на счетах</td>
            <td>{{ charBeat.forecastSumAll }}</td>
          </tr>
          <tr>
            <td>Самый "Богатый"</td>
            <td>{{ charBeat.forecastMax }}</td>
          </tr>
          <tr>
            <td>Самый "Бедный"</td>
            <td>{{ charBeat.forecastMin }}</td>
          </tr>
          <tr>
            <td colspan="2">
              <h3 class="header">Начисления / Списания</h3>
            </td>
          </tr>
          <tr>
            <td>Начисления</td>
            <td>{{ charBeat.sumKarma }}</td>
          </tr>
          <tr>
            <td>Списания</td>
            <td>{{ charBeat.sumRents }}</td>
          </tr>
        </table>

        <!-- Уровень жизни -->
        <h3>Уровень жизни</h3>
        <table>
          <tr>
            <td>Нижний порог</td>
            <td>
              Текущий <br />
              <hr />
              Прогнозируемый
            </td>
          </tr>
          <tr v-for="l of lifestyles" :key="l.key">
            <td>{{ l.name }}</td>
            <td>
              {{ lifestyle[l.key.toLowerCase()] }} <br />
              <hr />
              {{ lifestyle[`forecast${l.key}`] }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { CharacterBeat, LifestyleStatistic, Session } from '@/store/types'
import { Vue } from 'vue-property-decorator'

export default class SrSession extends Vue {
  lifestyles = [
    {
      name: 'Бронза',
      key: 'Bronze'
    },
    {
      name: 'Серебро',
      key: 'Silver'
    },
    {
      name: 'Золото',
      key: 'Gold'
    },
    {
      name: 'Платина',
      key: 'Platinum'
    }
  ]

  get session(): Session | null {
    return this.$store.state.session
  }

  get charBeat(): CharacterBeat | undefined {
    return this.session?.beatCharacters
  }

  get lifestyle(): LifestyleStatistic | undefined {
    return this.session?.lifeStyle
  }
}
</script>

<style scoped lang="less">
.header {
  margin: 0;
}

td {
  padding: 0.5em 1em;
  border: 1px solid var(--font-sec);
}
</style>
