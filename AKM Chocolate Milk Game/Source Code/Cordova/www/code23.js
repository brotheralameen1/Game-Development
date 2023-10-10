gdjs.LoseCode = {};
gdjs.LoseCode.GDPentegramObjects1= [];
gdjs.LoseCode.GDPentegramObjects2= [];
gdjs.LoseCode.GDLose1Objects1= [];
gdjs.LoseCode.GDLose1Objects2= [];
gdjs.LoseCode.GDMain_95MenuObjects1= [];
gdjs.LoseCode.GDMain_95MenuObjects2= [];
gdjs.LoseCode.GDMain_95Menu2Objects1= [];
gdjs.LoseCode.GDMain_95Menu2Objects2= [];

gdjs.LoseCode.conditionTrue_0 = {val:false};
gdjs.LoseCode.condition0IsTrue_0 = {val:false};
gdjs.LoseCode.condition1IsTrue_0 = {val:false};
gdjs.LoseCode.condition2IsTrue_0 = {val:false};


gdjs.LoseCode.mapOfGDgdjs_46LoseCode_46GDMain_9595MenuObjects1Objects = Hashtable.newFrom({"Main_Menu": gdjs.LoseCode.GDMain_95MenuObjects1});gdjs.LoseCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Main_Menu"), gdjs.LoseCode.GDMain_95MenuObjects1);

gdjs.LoseCode.condition0IsTrue_0.val = false;
gdjs.LoseCode.condition1IsTrue_0.val = false;
{
gdjs.LoseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoseCode.mapOfGDgdjs_46LoseCode_46GDMain_9595MenuObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LoseCode.condition0IsTrue_0.val ) {
{
gdjs.LoseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.LoseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main_Menu", false);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


};

gdjs.LoseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoseCode.GDPentegramObjects1.length = 0;
gdjs.LoseCode.GDPentegramObjects2.length = 0;
gdjs.LoseCode.GDLose1Objects1.length = 0;
gdjs.LoseCode.GDLose1Objects2.length = 0;
gdjs.LoseCode.GDMain_95MenuObjects1.length = 0;
gdjs.LoseCode.GDMain_95MenuObjects2.length = 0;
gdjs.LoseCode.GDMain_95Menu2Objects1.length = 0;
gdjs.LoseCode.GDMain_95Menu2Objects2.length = 0;

gdjs.LoseCode.eventsList0(runtimeScene);
return;

}

gdjs['LoseCode'] = gdjs.LoseCode;
