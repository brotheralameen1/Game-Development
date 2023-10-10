gdjs.PicScene3Code = {};
gdjs.PicScene3Code.GDPicScene3Objects1= [];
gdjs.PicScene3Code.GDPicScene3Objects2= [];

gdjs.PicScene3Code.conditionTrue_0 = {val:false};
gdjs.PicScene3Code.condition0IsTrue_0 = {val:false};
gdjs.PicScene3Code.condition1IsTrue_0 = {val:false};


gdjs.PicScene3Code.eventsList0 = function(runtimeScene) {

{


gdjs.PicScene3Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "pc3");
}if (gdjs.PicScene3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pc3");
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.PicScene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PicScene3Code.GDPicScene3Objects1.length = 0;
gdjs.PicScene3Code.GDPicScene3Objects2.length = 0;

gdjs.PicScene3Code.eventsList0(runtimeScene);
return;

}

gdjs['PicScene3Code'] = gdjs.PicScene3Code;
