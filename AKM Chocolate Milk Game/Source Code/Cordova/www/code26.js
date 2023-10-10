gdjs.PPTNCCode = {};
gdjs.PPTNCCode.GDMain_95MenuObjects1= [];
gdjs.PPTNCCode.GDMain_95MenuObjects2= [];
gdjs.PPTNCCode.GDPPTNCObjects1= [];
gdjs.PPTNCCode.GDPPTNCObjects2= [];
gdjs.PPTNCCode.GDPPTNC1Objects1= [];
gdjs.PPTNCCode.GDPPTNC1Objects2= [];
gdjs.PPTNCCode.GDInstructionsObjects1= [];
gdjs.PPTNCCode.GDInstructionsObjects2= [];
gdjs.PPTNCCode.GDMMObjects1= [];
gdjs.PPTNCCode.GDMMObjects2= [];

gdjs.PPTNCCode.conditionTrue_0 = {val:false};
gdjs.PPTNCCode.condition0IsTrue_0 = {val:false};
gdjs.PPTNCCode.condition1IsTrue_0 = {val:false};
gdjs.PPTNCCode.condition2IsTrue_0 = {val:false};


gdjs.PPTNCCode.mapOfGDgdjs_46PPTNCCode_46GDMain_9595MenuObjects1Objects = Hashtable.newFrom({"Main_Menu": gdjs.PPTNCCode.GDMain_95MenuObjects1});gdjs.PPTNCCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Main_Menu"), gdjs.PPTNCCode.GDMain_95MenuObjects1);

gdjs.PPTNCCode.condition0IsTrue_0.val = false;
gdjs.PPTNCCode.condition1IsTrue_0.val = false;
{
gdjs.PPTNCCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PPTNCCode.mapOfGDgdjs_46PPTNCCode_46GDMain_9595MenuObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PPTNCCode.condition0IsTrue_0.val ) {
{
gdjs.PPTNCCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.PPTNCCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main_Menu", false);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


};

gdjs.PPTNCCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PPTNCCode.GDMain_95MenuObjects1.length = 0;
gdjs.PPTNCCode.GDMain_95MenuObjects2.length = 0;
gdjs.PPTNCCode.GDPPTNCObjects1.length = 0;
gdjs.PPTNCCode.GDPPTNCObjects2.length = 0;
gdjs.PPTNCCode.GDPPTNC1Objects1.length = 0;
gdjs.PPTNCCode.GDPPTNC1Objects2.length = 0;
gdjs.PPTNCCode.GDInstructionsObjects1.length = 0;
gdjs.PPTNCCode.GDInstructionsObjects2.length = 0;
gdjs.PPTNCCode.GDMMObjects1.length = 0;
gdjs.PPTNCCode.GDMMObjects2.length = 0;

gdjs.PPTNCCode.eventsList0(runtimeScene);
return;

}

gdjs['PPTNCCode'] = gdjs.PPTNCCode;
