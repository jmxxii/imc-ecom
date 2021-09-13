<template>
  <div id="rep-info-bar">
    <div class="info">
      <span class="sales-name"><strong>Sales Rep:</strong> {{ fullName }}</span>
      <strong
        v-show="!isMobile"
        class="divider"
      >
        |
      </strong>
      <a
        class="sales-email"
        :href="`mailTo:${email}`"
      >
        <span>{{ email }}</span>
      </a>
      <strong
        v-show="!isMobile"
        class="divider"
      >
        |
      </strong>
      <a
        class="sales-phone"
        :href="`tel:${phone}`"
      >
        <span class="sales-phone">{{ phone }}</span>
      </a>
    </div>
  </div>
</template>

<script>
import api from '@/api/api';
import ResponsiveMixin from '../../mixins/Responsive.mixin';

export default {
  name: 'RepInfoBar',
  mixins: [ResponsiveMixin],
  data() {
    return {
      rep: {},
    };
  },
  computed: {
    fullName() {
      return `${this.rep?.FirstName || ''} ${this.rep?.LastName || ''}`;
    },
    email() {
      return this.rep?.EmailAddress || '';
    },
    phone() {
      return this.rep?.Phone || '';
    },
  },
  created() {
    this.getRep();
  },
  methods: {
    async getRep() {
      this.rep = await api('/SalesRep');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars.scss';

#rep-info-bar {
  width: 100%;
  min-height: 50px;
  border-top: $colorPrimary solid 2px;
  border-bottom: $colorPrimary solid 2px;
  background-color: $colorSecondary;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-bottom: 50px;

  .info {
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 768px) {
      flex-direction: column;
    }
  }

  span {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 5px;
    color: #fff;
  }

  .divider {
    color: #fff;
  }

  span strong {
    color: $colorPrimary;
  }

  a {
    color: #fff;
  }
}
</style>
