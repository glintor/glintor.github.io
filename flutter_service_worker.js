'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f29f2b53bc6d6ea07702f1057befd125",
"version.json": "1737318b1a5a988406ca1be3357034ab",
"index.html": "19f2441e6c23eda4249bd98f17b70ac3",
"/": "19f2441e6c23eda4249bd98f17b70ac3",
"main.dart.js": "6ac539905850b7f18e1ef8ea60c5bb89",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1ca3eee0e845aec374ce9560e2d33a06",
"assets/AssetManifest.json": "09805003b38d92015582d218db91f8e4",
"assets/NOTICES": "3e5b2a2ad2043839e00306ff45ce83ef",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "499c2316d2b63d798426f87c7c34c233",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "01e0c0651f23c4b9d4c46c8e9fb0025b",
"assets/fonts/MaterialIcons-Regular.otf": "5af0867adbe5a85b79901ec0190e4a1b",
"assets/assets/images/a12.jpeg": "0866044285bd08106953f924583bf9df",
"assets/assets/images/a9.jpeg": "23eed1339cb833ea081ba284c0681e43",
"assets/assets/images/nf5.jpeg": "6b9665e60bf23bfb9143c308c0846523",
"assets/assets/images/f2.JPEG": "e72a717cf9c7f3675a3d10354b46f290",
"assets/assets/images/f10.JPEG": "b68320073d65a1b2734aa9b154022370",
"assets/assets/images/a5.jpeg": "bff95f649fb2ac85ebb82d298c1f82e5",
"assets/assets/images/nf9.jpeg": "b429946953d5d78c3d54f922812cf654",
"assets/assets/images/a6.jpg": "dd86cd3c17e6c10444ce3b3a10022366",
"assets/assets/images/alloys_banner.jpg": "1cba218df25f8414175b4ad9eaea419a",
"assets/assets/images/metal.png": "0024f2f93b54518c6e6494ce82b7f2a4",
"assets/assets/images/nf8.jpeg": "0434d6f622cb18011cd680db2058665b",
"assets/assets/images/a4.JPEG": "a26677cc8f45c5ab39750e645547fe4e",
"assets/assets/images/f3.JPEG": "2bc6d57463c1f3df26143a65d163d4bb",
"assets/assets/images/f11.jpeg": "4b2a691e5f2cf39564538e46a3b6c808",
"assets/assets/images/nf4.jpeg": "b88d8e4fdaa0c9d6a27c57b7fe64c3c0",
"assets/assets/images/aboutus_demo.png": "e5a351f9383acc03281e97961f527af9",
"assets/assets/images/a3.jpeg": "b332498623c40dc0e59dee720f019a75",
"assets/assets/images/f8.jpeg": "a40a6a25396c6836aa115441e6a9ceca",
"assets/assets/images/f4.jpg": "0ea843ca0c73d4d4689ff48da4ce87c7",
"assets/assets/images/nf10.jpeg": "9e0961439342997185803c06958e4a38",
"assets/assets/images/f5.JPEG": "e9902ce65dc3a52cd5a9bf0efabb4328",
"assets/assets/images/arrow.png": "d0c1360ee776230674bca5849450b7bb",
"assets/assets/images/nf2.jpeg": "8ee3908807012665f553f1ed930db5da",
"assets/assets/images/nf11.jpeg": "8e8b1f81e636f6ec9d30acf9a4eb6a10",
"assets/assets/images/f9.jpeg": "29da0494393b0a1739e31ab5855dd72e",
"assets/assets/images/nf3.png": "ddbd0ba2e4a3777194e14cf3b8283d98",
"assets/assets/images/a2.jpeg": "4ef662c23a3a6755dc18bac81224b606",
"assets/assets/images/a1.jpeg": "10bfcbbc5ca6526914eed24689cf41b4",
"assets/assets/images/f6.JPEG": "5f898a488ea1699212457aa5d27a0456",
"assets/assets/images/nf1.jpeg": "ae3f9ef7771e33080d37247671fdb007",
"assets/assets/images/nf12.jpeg": "82211003657a173260dfefd63bdb9a07",
"assets/assets/images/logo.png": "b1db9b8f4d81559ac4fcc148e9a4baa8",
"assets/assets/images/nf13.jpeg": "91040410ee70724e718b8dc4df3722ce",
"assets/assets/images/scraps.mp4": "675961bc1f7babd3fcf7d2f202931db4",
"assets/assets/images/bgvideo.mp4": "25d470e2df6151f1637398d652c303ea",
"assets/assets/images/f7.jpeg": "5c2fb771343c533675d0fb6f5308fa8e",
"assets/assets/images/nf7.jpeg": "cbf6dda726ff73b3341127dc9875ca04",
"assets/assets/images/nf14.jpeg": "86029067c34e2aa2c0a1d1dd775440a0",
"assets/assets/images/a10.jpeg": "522d5e4770299368be0cb884075bf804",
"assets/assets/images/a8.jpg": "ef4a1b2e7a06876bcd63184e99aaf727",
"assets/assets/images/non_ferrous_banner.jpg": "fe0452268e93edfdfcef8594cfb4ad40",
"assets/assets/images/a7.jpeg": "316967e802c3146bbb96c5a4d589c03b",
"assets/assets/images/ferrous_banner.jpg": "8e8cb2d583bd0e6590218d1693128c88",
"assets/assets/images/nf15.jpg": "b78d73749456008e1a61bbdeb9dcafd8",
"assets/assets/images/semi.png": "09d7c0c741e848de7aec2a1841e65b0d",
"assets/assets/images/crown.png": "3461726c5ffdcf543b67cbb10b06fdb6",
"assets/assets/images/a11.jpeg": "4e0e330fe72cdf9c4c98b9d8559e6163",
"assets/assets/images/nf6.jpeg": "468b41bc70660ad1fcbf76f429efd465",
"assets/assets/images/f1.jpeg": "ffdcb2df164ed1366246042865156559",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
