<template>
  <footer id="footer">
    <div class="footer-container">
      <div id="top">
        <nav class="nav-links">
          <h4 class="nav-title">Quick Links</h4>
          <v-button
            v-for="link in navLinks"
            class="links"
            :key="link.title"
            v-bind="link"
          />
        </nav>
        <div id="support">
          <div class="support-container">
            <h3 class="support-title" >Customer Support</h3>
            <div class="support-fields">
              <a
                class="support-phone"
                href="tel:(800) 555-5555"
              >
                <span>(800) 555-5555</span>
              </a>
              <a
                class="support-email"
                href="mailto:support@repzio.com"
              >
                <span>support@repzio.com</span>
              </a>
            </div>
            <h3 class="support-title" >Sales Assistance</h3>
            <div class="support-fields">
              <a
                class="support-phone"
                href="tel:(800) 666-6666"
              >
                <span>(800) 666-6666</span>
              </a>
              <a
                class="support-email"
                href="mailto:sales@repzio.com"
              >
                <span>sales@repzio.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="bottom">
        <span>©2021 All Rights Reserved. Repzio</span>
      </div>
    </div>
  </footer>
</template>

<script>
import VButton from '@/components/buttons/Button.vue';
import { footer } from '@/components/navigation/navigationButtons';

export default {
  name: 'Footer',
  components: { VButton },
  data() {
    return {
      navLinks: footer,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/vars.scss";

:deep(.link-btn .dark-link) {
    font-weight: 300;
    text-transform: capitalize;
    font-size: 12px;
}

@mixin mobile {
  justify-content: center;
  align-items: center;
}

#footer {
  background-color: $colorSecondary;

  .footer-container {
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 25px;

    @media(max-width: 768px) {
      margin: 0;
      @include mobile;
    }
  }

  #top {
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 90%;
    min-height: 300px;

    @media(max-width: 768px) {
      flex-direction: column;
      @include mobile;
    }

    .nav-links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 300px;
      padding: 25px;
      margin-left: 25px;

      @media(max-width: 768px) {
        @include mobile;
        margin: 0;
      }
    }

    .nav-title {
      margin-top: 5px;
      font-weight: 400;
    }

    #support {
      .support-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        min-width: 300px;
        padding: 25px;

        @media(max-width: 768px) {
          flex-direction: column;
          @include mobile;
        }

        .support-title {
          font-weight: 300;
          font-size: 30px;
          margin-bottom: 10px;
        }

        .support-title:nth-child(1) {
          margin-top: 0;
        }

        .support-fields {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          @media(max-width: 768px) {
            flex-direction: column;
            @include mobile;
          }

          span {
            font-weight: 300;
            font-size: 14px;
          }

          a {
            color: #fff;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
              text-decoration-color: $colorPrimary;
              text-decoration-thickness: 2px;
            }
          }
        }
      }
    }
  }

  #bottom {
    display: flex;
    justify-content: space-between;
    width: 85%;
    height: 50px;
    padding: 25px 0;

    @media(max-width: 768px) {
      @include mobile;
    }

    span {
      font-size: 14px;
    }
  }
}

</style>
