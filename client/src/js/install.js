const butInstall = document.getElementById('buttonInstall');


window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
  });
  // butinstall  works by adding an event listener to the buttonInstall element.
  // When the button is clicked, the prompt() method is called on the deferredPrompt object. 
  //This will trigger the installation prompt to appear. The buttonInstall element is then hidden by toggling the hidden class.
  butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
  
    if (!promptEvent) {
      return;
    }
  
    promptEvent.prompt();
  
    window.deferredPrompt = null;
  
    butInstall.classList.toggle('hidden', true);
  });
  
  window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
  });
