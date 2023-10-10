gdjs.SplashCode = {};
gdjs.SplashCode.GDSplashObjects1= [];
gdjs.SplashCode.GDSplashObjects2= [];
gdjs.SplashCode.GDLoadingObjects1= [];
gdjs.SplashCode.GDLoadingObjects2= [];
gdjs.SplashCode.GDNecromancerObjects1= [];
gdjs.SplashCode.GDNecromancerObjects2= [];

gdjs.SplashCode.conditionTrue_0 = {val:false};
gdjs.SplashCode.condition0IsTrue_0 = {val:false};
gdjs.SplashCode.condition1IsTrue_0 = {val:false};


gdjs.SplashCode.eventsList0 = function(runtimeScene) {

{


gdjs.SplashCode.condition0IsTrue_0.val = false;
{
gdjs.SplashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "Spalsh");
}if (gdjs.SplashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Splash");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main_Menu", false);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", false);
}{gdjs.adMob.showInterstitial();
}}

}


};

gdjs.SplashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashCode.GDSplashObjects1.length = 0;
gdjs.SplashCode.GDSplashObjects2.length = 0;
gdjs.SplashCode.GDLoadingObjects1.length = 0;
gdjs.SplashCode.GDLoadingObjects2.length = 0;
gdjs.SplashCode.GDNecromancerObjects1.length = 0;
gdjs.SplashCode.GDNecromancerObjects2.length = 0;

gdjs.SplashCode.eventsList0(runtimeScene);
return;

}

gdjs['SplashCode'] = gdjs.SplashCode;
