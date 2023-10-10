gdjs.Main_95MenuCode = {};
gdjs.Main_95MenuCode.GDMain_95MenuObjects1= [];
gdjs.Main_95MenuCode.GDMain_95MenuObjects2= [];
gdjs.Main_95MenuCode.GDMain_95Menu1Objects1= [];
gdjs.Main_95MenuCode.GDMain_95Menu1Objects2= [];
gdjs.Main_95MenuCode.GDPlayObjects1= [];
gdjs.Main_95MenuCode.GDPlayObjects2= [];
gdjs.Main_95MenuCode.GDPlay1Objects1= [];
gdjs.Main_95MenuCode.GDPlay1Objects2= [];
gdjs.Main_95MenuCode.GDPPTNCObjects1= [];
gdjs.Main_95MenuCode.GDPPTNCObjects2= [];
gdjs.Main_95MenuCode.GDPPTNC1Objects1= [];
gdjs.Main_95MenuCode.GDPPTNC1Objects2= [];
gdjs.Main_95MenuCode.GDGuideObjects1= [];
gdjs.Main_95MenuCode.GDGuideObjects2= [];
gdjs.Main_95MenuCode.GDGuide2Objects1= [];
gdjs.Main_95MenuCode.GDGuide2Objects2= [];
gdjs.Main_95MenuCode.GDExitObjects1= [];
gdjs.Main_95MenuCode.GDExitObjects2= [];
gdjs.Main_95MenuCode.GDQuitObjects1= [];
gdjs.Main_95MenuCode.GDQuitObjects2= [];
gdjs.Main_95MenuCode.GDGood_95LuckObjects1= [];
gdjs.Main_95MenuCode.GDGood_95LuckObjects2= [];
gdjs.Main_95MenuCode.GDContributeObjects1= [];
gdjs.Main_95MenuCode.GDContributeObjects2= [];
gdjs.Main_95MenuCode.GDSubscribeObjects1= [];
gdjs.Main_95MenuCode.GDSubscribeObjects2= [];
gdjs.Main_95MenuCode.GDLoad_95Game1Objects1= [];
gdjs.Main_95MenuCode.GDLoad_95Game1Objects2= [];
gdjs.Main_95MenuCode.GDLoad_95GameObjects1= [];
gdjs.Main_95MenuCode.GDLoad_95GameObjects2= [];
gdjs.Main_95MenuCode.GDWebObjects1= [];
gdjs.Main_95MenuCode.GDWebObjects2= [];
gdjs.Main_95MenuCode.GDWeb2Objects1= [];
gdjs.Main_95MenuCode.GDWeb2Objects2= [];
gdjs.Main_95MenuCode.GDLS1Objects1= [];
gdjs.Main_95MenuCode.GDLS1Objects2= [];
gdjs.Main_95MenuCode.GDLS2Objects1= [];
gdjs.Main_95MenuCode.GDLS2Objects2= [];

gdjs.Main_95MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_95MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_95MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_95MenuCode.condition2IsTrue_0 = {val:false};


gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.Main_95MenuCode.GDExitObjects1});gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDWebObjects1Objects = Hashtable.newFrom({"Web": gdjs.Main_95MenuCode.GDWebObjects1});gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.Main_95MenuCode.GDPlayObjects1});gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDContributeObjects1Objects = Hashtable.newFrom({"Contribute": gdjs.Main_95MenuCode.GDContributeObjects1});gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDGuideObjects1Objects = Hashtable.newFrom({"Guide": gdjs.Main_95MenuCode.GDGuideObjects1});gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDPPTNCObjects1Objects = Hashtable.newFrom({"PPTNC": gdjs.Main_95MenuCode.GDPPTNCObjects1});gdjs.Main_95MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Main_95MenuCode.GDExitObjects1);

gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_95MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDExitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_95MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_95MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_95MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Web"), gdjs.Main_95MenuCode.GDWebObjects1);

gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_95MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDWebObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_95MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_95MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_95MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.alameentechhelp.site123.me/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Main_95MenuCode.GDPlayObjects1);

gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_95MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_95MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_95MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_95MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level01", false);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


{


gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_95MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Misc/y2mate.com - horror sound effect.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Contribute"), gdjs.Main_95MenuCode.GDContributeObjects1);

gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_95MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDContributeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_95MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_95MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_95MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UCRmZnjgfrD7al_h-cyOdQLA", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Guide"), gdjs.Main_95MenuCode.GDGuideObjects1);

gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_95MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDGuideObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_95MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_95MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_95MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Guide", false);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PPTNC"), gdjs.Main_95MenuCode.GDPPTNCObjects1);

gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_95MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDPPTNCObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_95MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_95MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_95MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PPTNC", false);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


{


gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_95MenuCode.condition0IsTrue_0.val) {
{gdjs.adMob.setupBanner("ca-app-pub-9806557752529441/6444069011", "", true);
}{gdjs.adMob.showBanner();
}}

}


};

gdjs.Main_95MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_95MenuCode.GDMain_95MenuObjects1.length = 0;
gdjs.Main_95MenuCode.GDMain_95MenuObjects2.length = 0;
gdjs.Main_95MenuCode.GDMain_95Menu1Objects1.length = 0;
gdjs.Main_95MenuCode.GDMain_95Menu1Objects2.length = 0;
gdjs.Main_95MenuCode.GDPlayObjects1.length = 0;
gdjs.Main_95MenuCode.GDPlayObjects2.length = 0;
gdjs.Main_95MenuCode.GDPlay1Objects1.length = 0;
gdjs.Main_95MenuCode.GDPlay1Objects2.length = 0;
gdjs.Main_95MenuCode.GDPPTNCObjects1.length = 0;
gdjs.Main_95MenuCode.GDPPTNCObjects2.length = 0;
gdjs.Main_95MenuCode.GDPPTNC1Objects1.length = 0;
gdjs.Main_95MenuCode.GDPPTNC1Objects2.length = 0;
gdjs.Main_95MenuCode.GDGuideObjects1.length = 0;
gdjs.Main_95MenuCode.GDGuideObjects2.length = 0;
gdjs.Main_95MenuCode.GDGuide2Objects1.length = 0;
gdjs.Main_95MenuCode.GDGuide2Objects2.length = 0;
gdjs.Main_95MenuCode.GDExitObjects1.length = 0;
gdjs.Main_95MenuCode.GDExitObjects2.length = 0;
gdjs.Main_95MenuCode.GDQuitObjects1.length = 0;
gdjs.Main_95MenuCode.GDQuitObjects2.length = 0;
gdjs.Main_95MenuCode.GDGood_95LuckObjects1.length = 0;
gdjs.Main_95MenuCode.GDGood_95LuckObjects2.length = 0;
gdjs.Main_95MenuCode.GDContributeObjects1.length = 0;
gdjs.Main_95MenuCode.GDContributeObjects2.length = 0;
gdjs.Main_95MenuCode.GDSubscribeObjects1.length = 0;
gdjs.Main_95MenuCode.GDSubscribeObjects2.length = 0;
gdjs.Main_95MenuCode.GDLoad_95Game1Objects1.length = 0;
gdjs.Main_95MenuCode.GDLoad_95Game1Objects2.length = 0;
gdjs.Main_95MenuCode.GDLoad_95GameObjects1.length = 0;
gdjs.Main_95MenuCode.GDLoad_95GameObjects2.length = 0;
gdjs.Main_95MenuCode.GDWebObjects1.length = 0;
gdjs.Main_95MenuCode.GDWebObjects2.length = 0;
gdjs.Main_95MenuCode.GDWeb2Objects1.length = 0;
gdjs.Main_95MenuCode.GDWeb2Objects2.length = 0;
gdjs.Main_95MenuCode.GDLS1Objects1.length = 0;
gdjs.Main_95MenuCode.GDLS1Objects2.length = 0;
gdjs.Main_95MenuCode.GDLS2Objects1.length = 0;
gdjs.Main_95MenuCode.GDLS2Objects2.length = 0;

gdjs.Main_95MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['Main_95MenuCode'] = gdjs.Main_95MenuCode;
