gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewVideoObjects1= [];
gdjs.Untitled_32sceneCode.GDNewVideoObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Untitled_32sceneCode.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewVideoObjects1[i].behaviorActivated("ButtonFSM") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewVideoObjects1[k] = gdjs.Untitled_32sceneCode.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewVideoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewVideoObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewVideoObjects1[i].play();
}
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewVideoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewVideoObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewVideoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewVideoObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
