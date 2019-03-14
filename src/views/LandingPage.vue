<template>
  <div class="page-container">
    <md-toolbar>
      <div class="md-layout-item">
        <router-link :to="{ path: '/' }">
          <img src="../assets/Sprout-Logo-White.png"  class="logo md-title"/>
        </router-link>
      </div>
      <div class="md-layout-item">
        <div class="md-layout">
          <div class="md-layout-item">
            <!-- My Requests tab -->
            <md-menu md-size="medium" md-align-trigger>
              <md-button md-menu-trigger>My Requests</md-button>

              <md-menu-content>
                <md-menu-item>My Leaves</md-menu-item>
                <md-menu-item>My OverTimes</md-menu-item>
                <md-menu-item>My Undertimes</md-menu-item>
                <md-menu-item>My Official Businesses</md-menu-item>
              </md-menu-content>
            </md-menu>

            <!-- Company tab -->
            <md-menu>
              <md-button>
                <router-link :to="{ path: '/' }">Company</router-link>
              </md-button>
            </md-menu>

            <!-- Administration Tools tab -->
            <md-menu md-size="medium" md-align-trigger>
              <md-button md-menu-trigger>Administration Tools</md-button>

              <md-menu-content>
                <md-menu-item>Leave Report</md-menu-item>
              </md-menu-content>
            </md-menu>

            <!-- Notifications tab -->
            <md-badge md-content="1">
              <md-button class="md-icon-button">
                <md-icon>notifications</md-icon>
              </md-button>
            </md-badge>

            <!-- User Name tab -->
            <md-menu md-size="medium" md-align-trigger>
              <md-button md-menu-trigger>
                <md-avatar>
                  <img src="../assets/no-image.png" alt="Avatar" />
                </md-avatar>
                User Name
              </md-button>

              <md-menu-content>
                <md-menu-item>My Profile</md-menu-item>
                <md-menu-item>My Attendance</md-menu-item>
                <md-menu-item>My Biologs</md-menu-item>
                <md-divider></md-divider>
                <md-menu-item>Help</md-menu-item>
                <md-menu-item>Change Password</md-menu-item>
                <md-divider></md-divider>
                <md-menu-item>Privacy Policy</md-menu-item>
                <md-menu-item>Terms of Service</md-menu-item>
                <md-divider></md-divider>
                <md-menu-item>Log Out</md-menu-item>
              </md-menu-content>
            </md-menu>
          </div>
          <div class="md-size-25">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>
      </div>
    </md-toolbar>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .logo {
    width: 150px;
    float: left;
  }
  
</style>

<script>
export default {
  name: 'LastRowFixed',
  data: () => ({
    menuVisible: false
  })
}
</script>
