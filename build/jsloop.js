(function(){
  let Loop = function(_fn, _fps, _run = true){
    let callback = _fn;
    let framerate = 1000 / (_fps || 60);
    let running = false;
    
    let loop = () => {
      callback();
      if(running) setTimeout(loop, framerate);
    };
    
    this.start = () => {
      running = true;
      loop();
    };
    this.stop = () => {
      running = false;
    };
    
    this.isRunning = () => {
      return running;
    };
    
    this.getFPS = () => {
      return 1000 / framerate;
    };
    this.setFPS = (_fps) => {
      framerate = 1000 / _fps;
    };
    this.getFramerate = () => {
      return framerate;
    };
    this.setFramerate = (_framerate) => {
      framerate = _framerate;
    };
    
    if(_run) this.start();
  };
  
  if(typeof window == 'object') window.Loop = Loop;
  if(typeof module == 'object') module.exports = Loop;
}());