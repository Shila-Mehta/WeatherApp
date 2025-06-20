export function handlePanelToggle(){
      const panel_label=document.querySelector(".panel-label");
      const panel=document.querySelector(".panel");

      if( panel &&  panel.hasAttribute("hidden")){
          panel.removeAttribute("hidden");
      }


      if( panel_label &&  panel_label.hasAttribute("hidden")){
          panel_label.removeAttribute("hidden");
      }

      }