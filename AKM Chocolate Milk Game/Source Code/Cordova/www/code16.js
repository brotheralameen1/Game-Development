gdjs.PicScene9Code = {};
gdjs.PicScene9Code.GDPC09Objects1= [];
gdjs.PicScene9Code.GDPC09Objects2= [];
gdjs.PicScene9Code.GDStareObjects1= [];
gdjs.PicScene9Code.GDStareObjects2= [];

gdjs.PicScene9Code.conditionTrue_0 = {val:false};
gdjs.PicScene9Code.condition0IsTrue_0 = {val:false};
gdjs.PicScene9Code.condition1IsTrue_0 = {val:false};


gdjs.PicScene9Code.eventsList0 = function(runtimeScene) {

{


gdjs.PicScene9Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene9Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PicScene9Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Agio_O_Baphomet.wav", false, 100, 1);
}}

}


};gdjs.PicScene9Code.eventsList1 = function(runtimeScene) {

{


gdjs.PicScene9Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene9Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 60, "PC9");
}if (gdjs.PicScene9Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PC9");
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.PicScene9Code.eventsList2 = function(runtimeScene) {

{


gdjs.PicScene9Code.eventsList0(runtimeScene);
}


{


gdjs.PicScene9Code.eventsList1(runtimeScene);
}


};

gdjs.PicScene9Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PicScene9Code.GDPC09Objects1.length = 0;
gdjs.PicScene9Code.GDPC09Objects2.length = 0;
gdjs.PicScene9Code.GDStareObjects1.length = 0;
gdjs.PicScene9Code.GDStareObjects2.length = 0;

gdjs.PicScene9Code.eventsList2(runtimeScene);
return;

}

gdjs['PicScene9Code'] = gdjs.PicScene9Code;
