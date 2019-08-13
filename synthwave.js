setTimeout(function () {
  try {
    // Main
    const root = document.querySelector('home-assistant').shadowRoot
      const main = root.querySelector('home-assistant-main').shadowRoot
        // Lovelace
        const lovelace = main.querySelector("ha-panel-lovelace").shadowRoot
          // Sidebar
          const sidebar = main.querySelector('ha-sidebar').shadowRoot
            // Title
            const title = sidebar.querySelector('div.menu > span')
            title.style.textShadow = '0 0 2px #393a33, 0 0 35px #ffffff44, 0 0 8px #f39f0575, 0 0 2px #f39f0575'
            title.style.color = '#f4eee4'
          // const hui_root = lovelace.querySelector("hui-root").shadowRoot
          //   // Paper Tabs
          //   const tabs = hui_root.querySelector("paper-tab.iron-selected")
          //   tabs.style.textShadow = '0 0 2px #393a33, 0 0 35px #ffffff44, 0 0 8px #f39f0575, 0 0 2px #f39f0575'
          //   tabs.style.color = '#f4eee4'
          // const hui_view = hui_root.querySelector("hui-view").shadowRoot
          //   // Custom Cards - Vertical
          //   const hui_vertical_stack_card = hui_view.querySelector("hui-vertical-stack-card").shadowRoot
          //     // Custom Cards - Horizontal
          //     const hui_horizontal_stack_card = hui_vertical_stack_card.querySelector("hui-horizontal-stack-card").shadowRoot
          //       // Custom Button Card
          //       const button_card = hui_horizontal_stack_card.querySelector("button-card").shadowRoot
          //       const icon = button_card.querySelector("#icon")
          //       icon.style.filter = 'drop-shadow( 0 0 8px #f39f0575)'
  }
  catch (e) {
    console.log(e)
  }
}, 200)