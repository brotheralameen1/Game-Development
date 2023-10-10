gdjs.PicScene12Code = {};
gdjs.PicScene12Code.GDPC12Objects1= [];
gdjs.PicScene12Code.GDPC12Objects2= [];
gdjs.PicScene12Code.GDStareObjects1= [];
gdjs.PicScene12Code.GDStareObjects2= [];

gdjs.PicScene12Code.conditionTrue_0 = {val:false};
gdjs.PicScene12Code.condition0IsTrue_0 = {val:false};
gdjs.PicScene12Code.condition1IsTrue_0 = {val:false};


gdjs.PicScene12Code.eventsList0 = function(runtimeScene) {

{


gdjs.PicScene12Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene12Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PicScene12Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Misc/y2mate.com - Witness the shadows.mp3", false, 100, 1);
}}

}


{


gdjs.PicScene12Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene12Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 50, "PC12");
}if (gdjs.PicScene12Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PC12");
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.PicScene12Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PicScene12Code.GDPC12Objects1.length = 0;
gdjs.PicScene12Code.GDPC12Objects2.length = 0;
gdjs.PicScene12Code.GDStareObjects1.length = 0;
gdjs.PicScene12Code.GDStareObjects2.length = 0;

gdjs.PicScene12Code.eventsList0(runtimeScene);
return;

}

gdjs['PicScene12Code'] = gdjs.PicScene12Code;
