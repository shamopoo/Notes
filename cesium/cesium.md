# Cesium 入门

## 渲染环境参数调节
> 包括环境光照，环境光遮蔽，景深，所有与视觉效果与渲染相关的设置

## Viewer小部件
* **Geocoder** : 一种定位搜索工具，它可以让摄像机飞到查询位置。默认使用必应地图数据。
* **HomeButton** : 将视野带回到默认窗口。
* **shadows**:  是否显示阴影。
* **sceneMode**: 初始场景模式 1 2D模式 2 2D循环模式 3 3D模式 。
* **SceneModePicker** : 3D, 2D 和 Columbus视图(CV)模式之间的切换。
* **BaseLayerPicker** : 选择在地球上展示的图像和地形图。
* **NavigationHelpButton** :展示默认的相机控件。
* **infoBox** : 是否显示信息框。
* **clock** :  用于控制当前时间的时钟对象。
* **fullscreenElement** :  全屏时渲染的HTML元素。
* **scene3DOnly** :  如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源。
* **Animation** : 控制播放视图动画的动画速度。
* **Timeline** : 指示当前时间，允许用户跳转到特定的时间。
* **CreditsDisplay** : 展示数据的属性，这总是被要求的。
* **FullscreenButton** : 使视图全屏。
* **animation**:  如果设置为false，则不会创建“动画”窗口小部件。
* **viewer.trackedEntity = Entity** 跟踪某个实体。如果调用zoomTo、flyTo自动取消跟踪。

## Scene
我们可以根据太阳的位置来配置我们的Scene。

```javascript
viewer.scene.globe.enableLighting = true
```
* **Cartesian3** : 一个3D的笛卡尔点 - 当被用作位置时，它与地球的中心是相对的，使用地球固定框架(ECR)
* **Cartographic**： : 由纬度/经度(弧度)定义的位置和地球表面的高度。
* **Heading** **Pitch Roll**: 一种旋转(在弧度上)关于在中轴上的局部轴的旋转。标题是关于负z轴的旋转。纵轴是负轴的旋转。滚动是关于正x轴的旋转。
* **Quaternion** : 3D通过旋转表示为4D坐标。

## Camra Control
* Roll 是围绕X轴旋转，
* Pitch 是围绕Y轴旋转，
* Heading 是围绕Z轴旋转

**setView**: 在特定位置和方向立即设置相机。
**zoomIn**: 沿着视角矢量移动摄像机。
**zoomOut**: 沿视角矢量向后移动摄像机。
**flyTo**: 创建从当前相机位置到新位置的动画相机飞行。
**lookAt**: 定位并定位摄像机以给定偏移量瞄准目标点。
**move** : 朝任何方向移动摄像机。
**rotate**: 绕任意轴旋转相机。

```javascript
//设置镜头位置与方向
camera.setView( {
    //镜头的经纬度、高度。镜头默认情况下，在指定经纬高度俯视（pitch=-90）地球
    position : Cesium.Cartesian3.fromDegrees( 116.3, 39.9, 100000000 ),//北京100000公里上空
    //下面的几个方向正好反映默认值
    heading : Cesium.Math.toRadians( 0 ),
    pitch : Cesium.Math.toRadians( -90 ),
    roll : Cesium.Math.toRadians( 0 )
} );
//让镜头飞行（动画）到某个地点和方向
setTimeout( function()
{
    camera.flyTo( {
        destination : Cesium.Cartesian3.fromDegrees( 116, 15, 6000000 ),
        orientation : {
            heading : Cesium.Math.toRadians( -15 ),
            pitch : Cesium.Math.toRadians( -65 ),
            roll : Cesium.Math.toRadians( 0 )
        },
        duration : 3,//动画持续时间
        complete : function()//飞行完毕后执行的动作
        {
            addEntities();
        }
    } );
}, 1000 );
```

## Material and  Outline

> 材质（Material）与轮廓（Outline）

多数形状均支持通过一致的方式来设置属性、控制外观：

1. fill：布尔型，用于指定目标形状是否被填充
2. outline：布尔型，用于指定是否绘制形状的边缘
3. material：如果fill为true，该属性可以控制填充的材质类型



# 坐标转换、计算

> 常用的坐标有两种WGS84地理坐标系和笛卡尔空间坐标系。

在实际应用中用的最多的操作就是（lng, lat, alt）<=>(x, y, z)之间的相互转换，cesiumjs为我们提供了这些转换

```javascript
// 经纬度坐标转为笛卡尔空间直角坐标系
var ellipsoid = viewer.scene.globe.ellipsoid;
var cartographic = Cesium.Cartographic.fromDegrees(lng,lat,alt);
var cartesian3 = ellipsoid.cartographicToCartesian(cartographic);
var x = cartesian3.x;  
var y = cartesian3.y;   
var z = cartesian3.z;

// 笛卡尔空间直角坐标系转为经纬度坐标
var ellipsoid = viewer.scene.globe.ellipsoid;
var cartesian3 = new Cesium.cartesian3(x,y,z);
var cartographic = ellipsoid.cartesianToCartographic(cartesian3);
var lat = Cesium.Math.toDegrees(cartograhphic.latitude);
var lng = Cesium.Math.toDegrees(cartograhpinc.longitude);
var alt = cartographic.height;
```

# 几何形状
>  添加各种几何体进行交互，关联数据、关联事件等

Entity API提供两类API：

1. 面向图形开发人员的底层API，通常称为“Primitive API”。该API暴露最小限度的抽象，使用图形学术语，具有很大的灵活性，需要具有图形学编程的知识。

2. 高级别的数据驱动的API，称为“Entity API”。该API使用一致性设计的、高级别的对象来管理一组相关性的可视化对象，其底层使用Primitive API。

# 3D Tiles

>  隐藏、高度微调、截平面、视域、高亮注释与交互，关联数据、关联事件等

3DTiles数据集是cesium小组AnalyticlGraphics与2016年3月定义的一种数据集，3DTiles数据集以分块、分级渲染，将大数据量三维数据以分块，分层的形式组织起来，可以大量减轻浏览器和GPU的负担是一个优秀的，并且格式公开的数据格式。

3D Tiles将用于流式传输3D内容，包括建筑物，树木，点云和矢量数据。

```javascript
var tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: url,  //数据路径  
    show: ture, // 是否显示
    maximumScreenSpaceError: 2,        //最大的屏幕空间误差
    maximumNumberOfLoadedTiles: 1000,  //最大加载瓦片个数
    modelMatrix: m //形状矩阵
}));
```

## 标记高亮操作

```javascript
var previousPickedEntity = undefined;
handler.setInputAction(function(movement) {
    var pickedPrimitive = viewer.scene.pick(movement.endPosition);
    var pickedEntity = (Cesium.defined(pickedPrimitive)) ? pickedPrimitive.id : undefined;
    // Unhighlight the previously picked entity
    if (Cesium.defined(previousPickedEntity)) {
        previousPickedEntity.billboard.scale = 1.0;
        previousPickedEntity.billboard.color = Cesium.Color.WHITE;
    }
    // Highlight the currently picked entity
    if (Cesium.defined(pickedEntity) && Cesium.defined(pickedEntity.billboard)) {
        pickedEntity.billboard.scale = 2.0;
        pickedEntity.billboard.color = Cesium.Color.ORANGERED;
        previousPickedEntity = pickedEntity;
    }
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
```

# 数据源与交互
>  GeoJson、kml、数据库表格

**geojson**： 一种对各种地理数据结构进行编码的格式，基于JavaScript对象表示法的地理空间信息数据交换格式。GeoJSON对象可以表示几何、特征或者特征集合。

**kml**：是一种基于XML语法与格式的、用于描述和保存地理信息（如点、线、图像、多边形和模型等）的编码规范，可以被Google Earth 和 Google Maps 识别并显示。

**Topojson**：是GeoJSON简化后的版本，文件大小缩小了80%。

# 其他数据
>  地图（底图）设置，可以切割局部显示

自定义imagery provider：

- **url** - 图片的url。和其他Imagery Provider一样，这个参数是必须的。在其他Imagery Provider中这个地址通常指向服务器或者服务的根目录。
- **extent** - 可选参数，以经纬度来定义的图片的覆盖范围。默认是整个地球。
- **credit** - 可选参数，数据的版权说明，显示在画布的左下角，有的provider像BingMapsImageryProvider和Arcgis server REST API还会有一个logo或者指向服务的字符串。
- **proxy** - 可选参数，代理，用来解决资源跨域共享的问题。

## DOM DTM DEM

### DTM(Digital Terrain Model)

​**DTM是什么？**

​       数字地面模型是利用一个任意坐标系中大量选择的已知x、y、z的坐标点对连续地面的一个简单的统计表示，或者说，DTM就是地形表面形态属性信息的数字表达，是带有空间位置特征和地形属性特征的数字描述。地形表面形态的属性信息一般包括高程、坡度、坡向等。

​**DTM设计初衷**

　　数字地形模型（DTM, Digital Terrain Model）最初是为了高速公路的自动设计提出来的（Miller，1956）。此后，它被用于各种线路选线（铁路、公路、输电线）的设计以及各种工程的面积、体积、坡度计算，任意两点间的通视判断及任意断面图绘制。

​ **DTM应用**

​	在测绘中被用于绘制等高线、坡度坡向图、立体透视图，制作正射影像图以及地图的修测。
​	在遥感应用中可作为分类的辅助数据。它还是的基础数据，可用于土地利用现状的分析、合理规划及洪水险	情预报等。
​	在军事上可用于导航及导弹制导、作战电子沙盘等。



### DEM(Digital Elevation Matrix)

​       **DEM是什么？**
　　数字高程模型（Digital Elevation Model，缩写DEM）是一定范围内规则格网点的平面坐标（X，Y）及其高程（Z）的数据集，它主要是描述区域地貌形态的空间分布，是通过等高线或相似立体模型进行数据采集（包括采样和量测），然后进行数据内插而形成的。DEM是对地貌形态的虚拟表示，可派生出等高线、坡度图等信息，也可与DOM或其它专题数据叠加，用于与地形相关的分析应用，同时它本身还是制作DOM的基础数据。

​	**DEM原理**

　　DEM是用一组有序数值阵列形式表示地面高程的一种实体地面模型，是数字地形模型(Digital Terrain Model，简称DTM)的一个分支。一般认为,DTM是描述包括高程在内的各种地貌因子，如坡度、坡向、坡度变化率等因子在内的线性和非线性组合的空间分布，其中DEM是零阶单纯的单项数字地貌模型，其他如坡度、坡向及坡度变化率等地貌特性可在DEM的基础上派生。DTM的另外两个分支是各种非地貌特性的以矩阵形式表示的数字模型，包括自然地理要素以及与地面有关的社会经济及人文要素，如土壤类型、土地利用类型、岩层深度、地价、商业优势区等等。实际上DTM是栅格数据模型的一种。它与图像的栅格表示形式的区别主要是：图像是用一个点代表整个像元的属性，而在DTM中，格网的点只表示点的属性，点与点之间的属性可以通过内插计算获得。

​	**如何建立DEM**

　　建立DEM的方法有多种。从数据源及采集方式讲有：(1)直接从地面测量,例如用GPS、全站仪、野外测量等;根据航空或航天影像，通过摄影测量途径获取,如立体坐标仪观测及空三加密法、解析测图、数字摄影测量等等;(3)从现有地形图上采集，如格网读点法、数字化仪手扶跟踪及扫描仪半自动采集然后通过内插生成DEM等方法。DEM内插方法很多,主要有分块内插、部分内插和单点移面内插三种。目前常用的算法是通过等高线和高程点建立不规则的三角 网(Triangular Irregular Network, 简称TIN)。然后在TIN基础上通过线性和双线性内插建DEM。

​	**DEM应用**

　　由于DEM描述的是地面高程信息，它在测绘、水文、气象、地貌、地质、土壤、工程建设、通讯、气象、军事等国民经济和国防建设以及人文和自然科学领域有着广泛的应用。如在工程建设上，可用于如土方量计算、通视分析等；在防洪减灾方面，DEM是进行水文分析如汇水区分析、水系网络分析、降雨分析、蓄洪计算、淹没分析等的基础; 在无线通讯上，可用 于蜂窝电话的基站分析等等。

### DOM(Digital Orthophoto Map)

利用数字高程模型（DEM）对航空航天影像进行正射纠正、接边、色彩调整、镶嵌，并按照一定范围裁切生成的数字正射影像数据集。

# 相机操作

Cesium提供了以下默认鼠标行为：

1. 单击并拖拽球体：旋转地球，镜头俯角不变
2. 单击并拖拽空间：滚动roll、俯仰pitch镜头
3. 右击并拖拽、中键滚动：缩放镜头
4. 中键拖拽：沿着地表的点旋转镜头

调用camera.setView()可以设置相机的位置和方向

```javascript
camera.setView( {
    positionCartographic : new Cesium.Cartographic( longitude, latitude, height ),
    heading : headingAngle,
    pitch : pitchAngle,
    roll : rollAngle
} );
 
//确保指定的东西南北范围进入视野
var west = Cesium.Math.toRadians( -77.0 );
var south = Cesium.Math.toRadians( 38.0 );
var east = Cesium.Math.toRadians( -72.0 );
var north = Cesium.Math.toRadians( 42.0 );
var extent = new Cesium.Extent( west, south, east, north );
camera.viewExtent( extent, Cesium.Ellipsoid.WGS84 );
```

