gdjs.PicScene5Code = {};
gdjs.PicScene5Code.GDPicScene5Objects1= [];
gdjs.PicScene5Code.GDPicScene5Objects2= [];

gdjs.PicScene5Code.conditionTrue_0 = {val:false};
gdjs.PicScene5Code.condition0IsTrue_0 = {val:false};
gdjs.PicScene5Code.condition1IsTrue_0 = {val:false};


gdjs.PicScene5Code.eventsList0 = function(runtimeScene) {

{


gdjs.PicScene5Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "pc5");
}if (gdjs.PicScene5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pc5");
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.PicScene5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PicScene5Code.GDPicScene5Objects1.length = 0;
gdjs.PicScene5Code.GDPicScene5Objects2.length = 0;

gdjs.PicScene5Code.eventsList0(runtimeScene);
return;

}

gdjs['PicScene5Code'] = gdjs.PicScene5Code;
