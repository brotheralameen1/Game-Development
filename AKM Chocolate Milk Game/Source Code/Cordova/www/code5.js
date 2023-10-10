gdjs.Level04Code = {};
gdjs.Level04Code.GDFloorObjects1= [];
gdjs.Level04Code.GDFloorObjects2= [];
gdjs.Level04Code.GDFloorObjects3= [];
gdjs.Level04Code.GDSpecialObjects1= [];
gdjs.Level04Code.GDSpecialObjects2= [];
gdjs.Level04Code.GDSpecialObjects3= [];
gdjs.Level04Code.GDLevel04_95DoorObjects1= [];
gdjs.Level04Code.GDLevel04_95DoorObjects2= [];
gdjs.Level04Code.GDLevel04_95DoorObjects3= [];
gdjs.Level04Code.GDKeyDoorObjects1= [];
gdjs.Level04Code.GDKeyDoorObjects2= [];
gdjs.Level04Code.GDKeyDoorObjects3= [];
gdjs.Level04Code.GDLevel03_95DoorObjects1= [];
gdjs.Level04Code.GDLevel03_95DoorObjects2= [];
gdjs.Level04Code.GDLevel03_95DoorObjects3= [];
gdjs.Level04Code.GDLevel03Objects1= [];
gdjs.Level04Code.GDLevel03Objects2= [];
gdjs.Level04Code.GDLevel03Objects3= [];
gdjs.Level04Code.GDBigDemonObjects1= [];
gdjs.Level04Code.GDBigDemonObjects2= [];
gdjs.Level04Code.GDBigDemonObjects3= [];
gdjs.Level04Code.GDPotionsObjects1= [];
gdjs.Level04Code.GDPotionsObjects2= [];
gdjs.Level04Code.GDPotionsObjects3= [];
gdjs.Level04Code.GDKeysObjects1= [];
gdjs.Level04Code.GDKeysObjects2= [];
gdjs.Level04Code.GDKeysObjects3= [];
gdjs.Level04Code.GDEnemiesObjects1= [];
gdjs.Level04Code.GDEnemiesObjects2= [];
gdjs.Level04Code.GDEnemiesObjects3= [];
gdjs.Level04Code.GDCoinsObjects1= [];
gdjs.Level04Code.GDCoinsObjects2= [];
gdjs.Level04Code.GDCoinsObjects3= [];
gdjs.Level04Code.GDLevel05Objects1= [];
gdjs.Level04Code.GDLevel05Objects2= [];
gdjs.Level04Code.GDLevel05Objects3= [];
gdjs.Level04Code.GDBorder1Objects1= [];
gdjs.Level04Code.GDBorder1Objects2= [];
gdjs.Level04Code.GDBorder1Objects3= [];
gdjs.Level04Code.GDBorder2Objects1= [];
gdjs.Level04Code.GDBorder2Objects2= [];
gdjs.Level04Code.GDBorder2Objects3= [];
gdjs.Level04Code.GDSilverKey2Objects1= [];
gdjs.Level04Code.GDSilverKey2Objects2= [];
gdjs.Level04Code.GDSilverKey2Objects3= [];
gdjs.Level04Code.GDSilverKeyObjects1= [];
gdjs.Level04Code.GDSilverKeyObjects2= [];
gdjs.Level04Code.GDSilverKeyObjects3= [];
gdjs.Level04Code.GDYellow_95Potion2Objects1= [];
gdjs.Level04Code.GDYellow_95Potion2Objects2= [];
gdjs.Level04Code.GDYellow_95Potion2Objects3= [];
gdjs.Level04Code.GDYellow_95PotionObjects1= [];
gdjs.Level04Code.GDYellow_95PotionObjects2= [];
gdjs.Level04Code.GDYellow_95PotionObjects3= [];
gdjs.Level04Code.GDSmallZombieObjects1= [];
gdjs.Level04Code.GDSmallZombieObjects2= [];
gdjs.Level04Code.GDSmallZombieObjects3= [];
gdjs.Level04Code.GDNecromancerObjects1= [];
gdjs.Level04Code.GDNecromancerObjects2= [];
gdjs.Level04Code.GDNecromancerObjects3= [];
gdjs.Level04Code.GDShootObjects1= [];
gdjs.Level04Code.GDShootObjects2= [];
gdjs.Level04Code.GDShootObjects3= [];
gdjs.Level04Code.GDBulletObjects1= [];
gdjs.Level04Code.GDBulletObjects2= [];
gdjs.Level04Code.GDBulletObjects3= [];
gdjs.Level04Code.GDUpObjects1= [];
gdjs.Level04Code.GDUpObjects2= [];
gdjs.Level04Code.GDUpObjects3= [];
gdjs.Level04Code.GDLeftObjects1= [];
gdjs.Level04Code.GDLeftObjects2= [];
gdjs.Level04Code.GDLeftObjects3= [];
gdjs.Level04Code.GDDownObjects1= [];
gdjs.Level04Code.GDDownObjects2= [];
gdjs.Level04Code.GDDownObjects3= [];
gdjs.Level04Code.GDRightObjects1= [];
gdjs.Level04Code.GDRightObjects2= [];
gdjs.Level04Code.GDRightObjects3= [];
gdjs.Level04Code.GDGoldCoinObjects1= [];
gdjs.Level04Code.GDGoldCoinObjects2= [];
gdjs.Level04Code.GDGoldCoinObjects3= [];
gdjs.Level04Code.GDSixSixSixObjects1= [];
gdjs.Level04Code.GDSixSixSixObjects2= [];
gdjs.Level04Code.GDSixSixSixObjects3= [];
gdjs.Level04Code.GDSceneSettingObjects1= [];
gdjs.Level04Code.GDSceneSettingObjects2= [];
gdjs.Level04Code.GDSceneSettingObjects3= [];

gdjs.Level04Code.conditionTrue_0 = {val:false};
gdjs.Level04Code.condition0IsTrue_0 = {val:false};
gdjs.Level04Code.condition1IsTrue_0 = {val:false};
gdjs.Level04Code.condition2IsTrue_0 = {val:false};
gdjs.Level04Code.condition3IsTrue_0 = {val:false};
gdjs.Level04Code.condition4IsTrue_0 = {val:false};
gdjs.Level04Code.condition5IsTrue_0 = {val:false};


gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level04Code.GDBigDemonObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDYellow_9595PotionObjects2Objects = Hashtable.newFrom({"Yellow_Potion": gdjs.Level04Code.GDYellow_95PotionObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects1Objects = Hashtable.newFrom({"BigDemon": gdjs.Level04Code.GDBigDemonObjects1});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDYellow_9595Potion2Objects1Objects = Hashtable.newFrom({"Yellow_Potion2": gdjs.Level04Code.GDYellow_95Potion2Objects1});gdjs.Level04Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "SadSatan1.wav", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Yellow_Potion"), gdjs.Level04Code.GDYellow_95PotionObjects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDYellow_9595PotionObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level04Code.GDYellow_95PotionObjects2 */
{for(var i = 0, len = gdjs.Level04Code.GDYellow_95PotionObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDYellow_95PotionObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Misc/y2mate.com - Aleister Crowley   The Great Beast Speaks.mp3", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yellow_Potion2"), gdjs.Level04Code.GDYellow_95Potion2Objects1);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects1Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDYellow_9595Potion2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level04Code.GDYellow_95Potion2Objects1 */
{for(var i = 0, len = gdjs.Level04Code.GDYellow_95Potion2Objects1.length ;i < len;++i) {
    gdjs.Level04Code.GDYellow_95Potion2Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Misc/y2mate.com - Dark Music  Lucifers Hymn  Choir.mp3", false, 100, 1);
}}

}


};gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level04Code.GDBigDemonObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBorder1Objects2Objects = Hashtable.newFrom({"Border1": gdjs.Level04Code.GDBorder1Objects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBorder1Objects2Objects = Hashtable.newFrom({"Border1": gdjs.Level04Code.GDBorder1Objects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level04Code.GDBigDemonObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBorder2Objects2Objects = Hashtable.newFrom({"Border2": gdjs.Level04Code.GDBorder2Objects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBorder2Objects2Objects = Hashtable.newFrom({"Border2": gdjs.Level04Code.GDBorder2Objects2});gdjs.Level04Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Border1"), gdjs.Level04Code.GDBorder1Objects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBorder1Objects2Objects, false, runtimeScene, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level04Code.GDBigDemonObjects2 */
/* Reuse gdjs.Level04Code.GDBorder1Objects2 */
{for(var i = 0, len = gdjs.Level04Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDBigDemonObjects2[i].separateFromObjectsList(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBorder1Objects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Border2"), gdjs.Level04Code.GDBorder2Objects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBorder2Objects2Objects, false, runtimeScene, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level04Code.GDBigDemonObjects2 */
/* Reuse gdjs.Level04Code.GDBorder2Objects2 */
{for(var i = 0, len = gdjs.Level04Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDBigDemonObjects2[i].separateFromObjectsList(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBorder2Objects2Objects, false);
}
}}

}


{


{
}

}


};gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level04Code.GDBigDemonObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDSilverKeyObjects2Objects = Hashtable.newFrom({"SilverKey": gdjs.Level04Code.GDSilverKeyObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects1Objects = Hashtable.newFrom({"BigDemon": gdjs.Level04Code.GDBigDemonObjects1});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDSilverKey2Objects1Objects = Hashtable.newFrom({"SilverKey2": gdjs.Level04Code.GDSilverKey2Objects1});gdjs.Level04Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("SilverKey"), gdjs.Level04Code.GDSilverKeyObjects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDSilverKeyObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level04Code.GDSilverKeyObjects2 */
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "PicScene8");
}{for(var i = 0, len = gdjs.Level04Code.GDSilverKeyObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDSilverKeyObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SilverKey2"), gdjs.Level04Code.GDSilverKey2Objects1);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects1Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDSilverKey2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level04Code.GDSilverKey2Objects1 */
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "PicScene9");
}{for(var i = 0, len = gdjs.Level04Code.GDSilverKey2Objects1.length ;i < len;++i) {
    gdjs.Level04Code.GDSilverKey2Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}}

}


};gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDShootObjects2Objects = Hashtable.newFrom({"Shoot": gdjs.Level04Code.GDShootObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level04Code.GDBigDemonObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDNecromancerObjects2Objects = Hashtable.newFrom({"Necromancer": gdjs.Level04Code.GDNecromancerObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Level04Code.GDBulletObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDShootObjects2Objects = Hashtable.newFrom({"Shoot": gdjs.Level04Code.GDShootObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level04Code.GDBigDemonObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDSmallZombieObjects2Objects = Hashtable.newFrom({"SmallZombie": gdjs.Level04Code.GDSmallZombieObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Level04Code.GDBulletObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Level04Code.GDBulletObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDNecromancerObjects2Objects = Hashtable.newFrom({"Necromancer": gdjs.Level04Code.GDNecromancerObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Level04Code.GDBulletObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDSmallZombieObjects2Objects = Hashtable.newFrom({"SmallZombie": gdjs.Level04Code.GDSmallZombieObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level04Code.GDBigDemonObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDSmallZombieObjects2Objects = Hashtable.newFrom({"SmallZombie": gdjs.Level04Code.GDSmallZombieObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level04Code.GDBigDemonObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDNecromancerObjects2Objects = Hashtable.newFrom({"Necromancer": gdjs.Level04Code.GDNecromancerObjects2});gdjs.Level04Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Necromancer"), gdjs.Level04Code.GDNecromancerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shoot"), gdjs.Level04Code.GDShootObjects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
gdjs.Level04Code.condition1IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDShootObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Level04Code.condition0IsTrue_0.val ) {
{
gdjs.Level04Code.condition1IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDNecromancerObjects2Objects, 100, false);
}}
if (gdjs.Level04Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level04Code.GDBigDemonObjects2 */
gdjs.Level04Code.GDBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBulletObjects2Objects, (( gdjs.Level04Code.GDBigDemonObjects2.length === 0 ) ? 0 :gdjs.Level04Code.GDBigDemonObjects2[0].getPointX("")), (( gdjs.Level04Code.GDBigDemonObjects2.length === 0 ) ? 0 :gdjs.Level04Code.GDBigDemonObjects2[0].getPointY("")), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shoot"), gdjs.Level04Code.GDShootObjects2);
gdjs.copyArray(runtimeScene.getObjects("SmallZombie"), gdjs.Level04Code.GDSmallZombieObjects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
gdjs.Level04Code.condition1IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDShootObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Level04Code.condition0IsTrue_0.val ) {
{
gdjs.Level04Code.condition1IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDSmallZombieObjects2Objects, 100, false);
}}
if (gdjs.Level04Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level04Code.GDBigDemonObjects2 */
gdjs.Level04Code.GDBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBulletObjects2Objects, (( gdjs.Level04Code.GDBigDemonObjects2.length === 0 ) ? 0 :gdjs.Level04Code.GDBigDemonObjects2[0].getPointX("")), (( gdjs.Level04Code.GDBigDemonObjects2.length === 0 ) ? 0 :gdjs.Level04Code.GDBigDemonObjects2[0].getPointY("")), "");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level04Code.GDBulletObjects2);
{for(var i = 0, len = gdjs.Level04Code.GDBulletObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDBulletObjects2[i].addPolarForce(0, 500, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level04Code.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Necromancer"), gdjs.Level04Code.GDNecromancerObjects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBulletObjects2Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDNecromancerObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level04Code.GDBulletObjects2 */
/* Reuse gdjs.Level04Code.GDNecromancerObjects2 */
{for(var i = 0, len = gdjs.Level04Code.GDNecromancerObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDNecromancerObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level04Code.GDBulletObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level04Code.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("SmallZombie"), gdjs.Level04Code.GDSmallZombieObjects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBulletObjects2Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDSmallZombieObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level04Code.GDBulletObjects2 */
/* Reuse gdjs.Level04Code.GDSmallZombieObjects2 */
{for(var i = 0, len = gdjs.Level04Code.GDSmallZombieObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDSmallZombieObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level04Code.GDBulletObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("SmallZombie"), gdjs.Level04Code.GDSmallZombieObjects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDSmallZombieObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level04Code.GDBigDemonObjects2 */
{for(var i = 0, len = gdjs.Level04Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDBigDemonObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lose", false);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Necromancer"), gdjs.Level04Code.GDNecromancerObjects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDNecromancerObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level04Code.GDBigDemonObjects2 */
{for(var i = 0, len = gdjs.Level04Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDBigDemonObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lose", false);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


{


{
}

}


};gdjs.Level04Code.eventsList4 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Level04Code.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemies"), gdjs.Level04Code.GDEnemiesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Keys"), gdjs.Level04Code.GDKeysObjects1);
gdjs.copyArray(runtimeScene.getObjects("Potions"), gdjs.Level04Code.GDPotionsObjects1);
{for(var i = 0, len = gdjs.Level04Code.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.Level04Code.GDCoinsObjects1[i].setString("Coins:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.Level04Code.GDEnemiesObjects1.length ;i < len;++i) {
    gdjs.Level04Code.GDEnemiesObjects1[i].setString("Enemies:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.Level04Code.GDPotionsObjects1.length ;i < len;++i) {
    gdjs.Level04Code.GDPotionsObjects1[i].setString("Potions:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Level04Code.GDKeysObjects1.length ;i < len;++i) {
    gdjs.Level04Code.GDKeysObjects1[i].setString("Keys:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


};gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDRightObjects2Objects = Hashtable.newFrom({"Right": gdjs.Level04Code.GDRightObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDDownObjects2Objects = Hashtable.newFrom({"Down": gdjs.Level04Code.GDDownObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs.Level04Code.GDUpObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.Level04Code.GDLeftObjects1});gdjs.Level04Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Level04Code.GDRightObjects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDRightObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects2);
{for(var i = 0, len = gdjs.Level04Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDBigDemonObjects2[i].addPolarForce(0, 40, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.Level04Code.GDDownObjects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDDownObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects2);
{for(var i = 0, len = gdjs.Level04Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDBigDemonObjects2[i].addPolarForce(90, 40, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.Level04Code.GDUpObjects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDUpObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects2);
{for(var i = 0, len = gdjs.Level04Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDBigDemonObjects2[i].addPolarForce(270, 40, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Level04Code.GDLeftObjects1);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDLeftObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects1);
{for(var i = 0, len = gdjs.Level04Code.GDBigDemonObjects1.length ;i < len;++i) {
    gdjs.Level04Code.GDBigDemonObjects1[i].addPolarForce(120, 40, 0);
}
}}

}


};gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level04Code.GDBigDemonObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDKeyDoorObjects2Objects = Hashtable.newFrom({"KeyDoor": gdjs.Level04Code.GDKeyDoorObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDKeyDoorObjects2Objects = Hashtable.newFrom({"KeyDoor": gdjs.Level04Code.GDKeyDoorObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level04Code.GDBigDemonObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDLevel03_9595DoorObjects2Objects = Hashtable.newFrom({"Level03_Door": gdjs.Level04Code.GDLevel03_95DoorObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDLevel03_9595DoorObjects2Objects = Hashtable.newFrom({"Level03_Door": gdjs.Level04Code.GDLevel03_95DoorObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level04Code.GDBigDemonObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDLevel04_9595DoorObjects2Objects = Hashtable.newFrom({"Level04_Door": gdjs.Level04Code.GDLevel04_95DoorObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDLevel04_9595DoorObjects2Objects = Hashtable.newFrom({"Level04_Door": gdjs.Level04Code.GDLevel04_95DoorObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level04Code.GDBigDemonObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDLevel04_9595DoorObjects2Objects = Hashtable.newFrom({"Level04_Door": gdjs.Level04Code.GDLevel04_95DoorObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level04Code.GDBigDemonObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDLevel03_9595DoorObjects2Objects = Hashtable.newFrom({"Level03_Door": gdjs.Level04Code.GDLevel03_95DoorObjects2});gdjs.Level04Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("KeyDoor"), gdjs.Level04Code.GDKeyDoorObjects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDKeyDoorObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level04Code.GDBigDemonObjects2 */
/* Reuse gdjs.Level04Code.GDKeyDoorObjects2 */
{for(var i = 0, len = gdjs.Level04Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDBigDemonObjects2[i].separateFromObjectsList(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDKeyDoorObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Level03_Door"), gdjs.Level04Code.GDLevel03_95DoorObjects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDLevel03_9595DoorObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level04Code.GDBigDemonObjects2 */
/* Reuse gdjs.Level04Code.GDLevel03_95DoorObjects2 */
{for(var i = 0, len = gdjs.Level04Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDBigDemonObjects2[i].separateFromObjectsList(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDLevel03_9595DoorObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Level04_Door"), gdjs.Level04Code.GDLevel04_95DoorObjects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDLevel04_9595DoorObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level04Code.GDBigDemonObjects2 */
/* Reuse gdjs.Level04Code.GDLevel04_95DoorObjects2 */
{for(var i = 0, len = gdjs.Level04Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDBigDemonObjects2[i].separateFromObjectsList(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDLevel04_9595DoorObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Level04_Door"), gdjs.Level04Code.GDLevel04_95DoorObjects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
gdjs.Level04Code.condition1IsTrue_0.val = false;
gdjs.Level04Code.condition2IsTrue_0.val = false;
gdjs.Level04Code.condition3IsTrue_0.val = false;
gdjs.Level04Code.condition4IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDLevel04_9595DoorObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level04Code.condition0IsTrue_0.val ) {
{
gdjs.Level04Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 800;
}if ( gdjs.Level04Code.condition1IsTrue_0.val ) {
{
gdjs.Level04Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 37;
}if ( gdjs.Level04Code.condition2IsTrue_0.val ) {
{
gdjs.Level04Code.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) >= 13;
}if ( gdjs.Level04Code.condition3IsTrue_0.val ) {
{
gdjs.Level04Code.condition4IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) >= 17;
}}
}
}
}
if (gdjs.Level04Code.condition4IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level05", true);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Level03_Door"), gdjs.Level04Code.GDLevel03_95DoorObjects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDLevel03_9595DoorObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.Level04Code.condition0IsTrue_0.val = false;
gdjs.Level04Code.condition1IsTrue_0.val = false;
gdjs.Level04Code.condition2IsTrue_0.val = false;
gdjs.Level04Code.condition3IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 4;
}if ( gdjs.Level04Code.condition0IsTrue_0.val ) {
{
gdjs.Level04Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 37;
}if ( gdjs.Level04Code.condition1IsTrue_0.val ) {
{
gdjs.Level04Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) >= 13;
}if ( gdjs.Level04Code.condition2IsTrue_0.val ) {
{
gdjs.Level04Code.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) >= 17;
}}
}
}
if (gdjs.Level04Code.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("KeyDoor"), gdjs.Level04Code.GDKeyDoorObjects1);
{for(var i = 0, len = gdjs.Level04Code.GDKeyDoorObjects1.length ;i < len;++i) {
    gdjs.Level04Code.GDKeyDoorObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level04Code.GDBigDemonObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDGoldCoinObjects2Objects = Hashtable.newFrom({"GoldCoin": gdjs.Level04Code.GDGoldCoinObjects2});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects1Objects = Hashtable.newFrom({"BigDemon": gdjs.Level04Code.GDBigDemonObjects1});gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDSixSixSixObjects1Objects = Hashtable.newFrom({"SixSixSix": gdjs.Level04Code.GDSixSixSixObjects1});gdjs.Level04Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("GoldCoin"), gdjs.Level04Code.GDGoldCoinObjects2);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects2Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDGoldCoinObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level04Code.GDGoldCoinObjects2 */
{for(var i = 0, len = gdjs.Level04Code.GDGoldCoinObjects2.length ;i < len;++i) {
    gdjs.Level04Code.GDGoldCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level04Code.GDBigDemonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SixSixSix"), gdjs.Level04Code.GDSixSixSixObjects1);

gdjs.Level04Code.condition0IsTrue_0.val = false;
{
gdjs.Level04Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDBigDemonObjects1Objects, gdjs.Level04Code.mapOfGDgdjs_46Level04Code_46GDSixSixSixObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level04Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level04Code.GDSixSixSixObjects1 */
{for(var i = 0, len = gdjs.Level04Code.GDSixSixSixObjects1.length ;i < len;++i) {
    gdjs.Level04Code.GDSixSixSixObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).mul(6);
}}

}


};gdjs.Level04Code.eventsList8 = function(runtimeScene) {

{


gdjs.Level04Code.eventsList0(runtimeScene);
}


{


gdjs.Level04Code.eventsList1(runtimeScene);
}


{


gdjs.Level04Code.eventsList2(runtimeScene);
}


{


gdjs.Level04Code.eventsList3(runtimeScene);
}


{


gdjs.Level04Code.eventsList4(runtimeScene);
}


{


gdjs.Level04Code.eventsList5(runtimeScene);
}


{


gdjs.Level04Code.eventsList6(runtimeScene);
}


{


gdjs.Level04Code.eventsList7(runtimeScene);
}


};

gdjs.Level04Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level04Code.GDFloorObjects1.length = 0;
gdjs.Level04Code.GDFloorObjects2.length = 0;
gdjs.Level04Code.GDFloorObjects3.length = 0;
gdjs.Level04Code.GDSpecialObjects1.length = 0;
gdjs.Level04Code.GDSpecialObjects2.length = 0;
gdjs.Level04Code.GDSpecialObjects3.length = 0;
gdjs.Level04Code.GDLevel04_95DoorObjects1.length = 0;
gdjs.Level04Code.GDLevel04_95DoorObjects2.length = 0;
gdjs.Level04Code.GDLevel04_95DoorObjects3.length = 0;
gdjs.Level04Code.GDKeyDoorObjects1.length = 0;
gdjs.Level04Code.GDKeyDoorObjects2.length = 0;
gdjs.Level04Code.GDKeyDoorObjects3.length = 0;
gdjs.Level04Code.GDLevel03_95DoorObjects1.length = 0;
gdjs.Level04Code.GDLevel03_95DoorObjects2.length = 0;
gdjs.Level04Code.GDLevel03_95DoorObjects3.length = 0;
gdjs.Level04Code.GDLevel03Objects1.length = 0;
gdjs.Level04Code.GDLevel03Objects2.length = 0;
gdjs.Level04Code.GDLevel03Objects3.length = 0;
gdjs.Level04Code.GDBigDemonObjects1.length = 0;
gdjs.Level04Code.GDBigDemonObjects2.length = 0;
gdjs.Level04Code.GDBigDemonObjects3.length = 0;
gdjs.Level04Code.GDPotionsObjects1.length = 0;
gdjs.Level04Code.GDPotionsObjects2.length = 0;
gdjs.Level04Code.GDPotionsObjects3.length = 0;
gdjs.Level04Code.GDKeysObjects1.length = 0;
gdjs.Level04Code.GDKeysObjects2.length = 0;
gdjs.Level04Code.GDKeysObjects3.length = 0;
gdjs.Level04Code.GDEnemiesObjects1.length = 0;
gdjs.Level04Code.GDEnemiesObjects2.length = 0;
gdjs.Level04Code.GDEnemiesObjects3.length = 0;
gdjs.Level04Code.GDCoinsObjects1.length = 0;
gdjs.Level04Code.GDCoinsObjects2.length = 0;
gdjs.Level04Code.GDCoinsObjects3.length = 0;
gdjs.Level04Code.GDLevel05Objects1.length = 0;
gdjs.Level04Code.GDLevel05Objects2.length = 0;
gdjs.Level04Code.GDLevel05Objects3.length = 0;
gdjs.Level04Code.GDBorder1Objects1.length = 0;
gdjs.Level04Code.GDBorder1Objects2.length = 0;
gdjs.Level04Code.GDBorder1Objects3.length = 0;
gdjs.Level04Code.GDBorder2Objects1.length = 0;
gdjs.Level04Code.GDBorder2Objects2.length = 0;
gdjs.Level04Code.GDBorder2Objects3.length = 0;
gdjs.Level04Code.GDSilverKey2Objects1.length = 0;
gdjs.Level04Code.GDSilverKey2Objects2.length = 0;
gdjs.Level04Code.GDSilverKey2Objects3.length = 0;
gdjs.Level04Code.GDSilverKeyObjects1.length = 0;
gdjs.Level04Code.GDSilverKeyObjects2.length = 0;
gdjs.Level04Code.GDSilverKeyObjects3.length = 0;
gdjs.Level04Code.GDYellow_95Potion2Objects1.length = 0;
gdjs.Level04Code.GDYellow_95Potion2Objects2.length = 0;
gdjs.Level04Code.GDYellow_95Potion2Objects3.length = 0;
gdjs.Level04Code.GDYellow_95PotionObjects1.length = 0;
gdjs.Level04Code.GDYellow_95PotionObjects2.length = 0;
gdjs.Level04Code.GDYellow_95PotionObjects3.length = 0;
gdjs.Level04Code.GDSmallZombieObjects1.length = 0;
gdjs.Level04Code.GDSmallZombieObjects2.length = 0;
gdjs.Level04Code.GDSmallZombieObjects3.length = 0;
gdjs.Level04Code.GDNecromancerObjects1.length = 0;
gdjs.Level04Code.GDNecromancerObjects2.length = 0;
gdjs.Level04Code.GDNecromancerObjects3.length = 0;
gdjs.Level04Code.GDShootObjects1.length = 0;
gdjs.Level04Code.GDShootObjects2.length = 0;
gdjs.Level04Code.GDShootObjects3.length = 0;
gdjs.Level04Code.GDBulletObjects1.length = 0;
gdjs.Level04Code.GDBulletObjects2.length = 0;
gdjs.Level04Code.GDBulletObjects3.length = 0;
gdjs.Level04Code.GDUpObjects1.length = 0;
gdjs.Level04Code.GDUpObjects2.length = 0;
gdjs.Level04Code.GDUpObjects3.length = 0;
gdjs.Level04Code.GDLeftObjects1.length = 0;
gdjs.Level04Code.GDLeftObjects2.length = 0;
gdjs.Level04Code.GDLeftObjects3.length = 0;
gdjs.Level04Code.GDDownObjects1.length = 0;
gdjs.Level04Code.GDDownObjects2.length = 0;
gdjs.Level04Code.GDDownObjects3.length = 0;
gdjs.Level04Code.GDRightObjects1.length = 0;
gdjs.Level04Code.GDRightObjects2.length = 0;
gdjs.Level04Code.GDRightObjects3.length = 0;
gdjs.Level04Code.GDGoldCoinObjects1.length = 0;
gdjs.Level04Code.GDGoldCoinObjects2.length = 0;
gdjs.Level04Code.GDGoldCoinObjects3.length = 0;
gdjs.Level04Code.GDSixSixSixObjects1.length = 0;
gdjs.Level04Code.GDSixSixSixObjects2.length = 0;
gdjs.Level04Code.GDSixSixSixObjects3.length = 0;
gdjs.Level04Code.GDSceneSettingObjects1.length = 0;
gdjs.Level04Code.GDSceneSettingObjects2.length = 0;
gdjs.Level04Code.GDSceneSettingObjects3.length = 0;

gdjs.Level04Code.eventsList8(runtimeScene);
return;

}

gdjs['Level04Code'] = gdjs.Level04Code;
