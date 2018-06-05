<template>
    <div class="welcome-page">
      <div class="welcome-page__title">Welcome !</div>
      <div class="welcome-page__content">
        <div class="welcome-page__info-box">
          <div class="welcome-page__info-box-title">Registration completed successfully</div>
          <div>
            <div>
              Current Address: {{ address }}
            </div>
            <div>
              Lang: {{ lang }}
            </div>
            <div>
              UserAgent: {{ userAgent }}
            </div>
            <div>
              Protocol: {{ protocol }}
            </div>
            <div>
              PathName: {{ pathName }}
            </div>
            <div>
              Amount url: {{ amountUrl }}
            </div>
            <div>
              availWidth: {{ availWidth }}
            </div>
            <div>
              availHeight: {{ availHeight }}
            </div>
          </div>
          <div class="welcome-page__follow">
            Please follow
            <router-link class="welcome-page__follow-link" to="/">
              Login page
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'welcome-page',
  data() {
    return {
      address: window.location.origin,
      lang: navigator.language,
      userAgent: navigator.userAgent,
      protocol: window.location.protocol,
      pathName: window.location.pathname,
      amountUrl: window.history.length,
      availWidth: window.screen.availWidth,
      availHeight: window.screen.availHeight,
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "../styles/colors";

  .welcome-page {
    &__title {
      text-align: center;
      padding-top: 50px;
      font-size: 42px;
      color: $emerald;
    }
    &__follow-link {
      margin-top: 2rem;
      text-decoration: none;
      color: $emerald;
      background: $white;
      padding: 5px 15px;
      display: inline-block;
      border-radius: 3px;
    }
    &__content {
      display: flex;
      padding: 50px 100px;
    }

    &__info-box {
      background: $emerald;
      color: $white;
      flex: 1;
      padding: 10px;
      border-radius: 5px;
      height: 250px;
      position: relative;
      box-shadow: 0 6px 35px -2px rgba(0, 0, 0, 0.3);
    }

    &__info-box-title {
      font-size: 21px;
      margin-bottom: 3rem;
    }
  }
</style>
