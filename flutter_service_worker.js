'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "ef799104d3a18c545d4475fa188532e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "1a4ffc2e713b26c2c9f00ac880a64e2d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "99e247d2ca4fc2311c9ee7f3baa6135b",
".git/logs/refs/heads/main": "99e247d2ca4fc2311c9ee7f3baa6135b",
".git/logs/refs/remotes/origin/HEAD": "99e247d2ca4fc2311c9ee7f3baa6135b",
".git/objects/32/5d6dbe278dccf0b9fe969d9eb9b2a6c12c6d68": "01d1d754a7fd4879fdd195f498cf3961",
".git/objects/63/8b605cb8b615cdca1baa89576368410c4b5c0c": "c0299429c5d477a6e7024ef145e36412",
".git/objects/a1/0c0123538721ac5ddece0db1af719429fcc438": "cf4fda7921ce3eca89d52beb63d61791",
".git/objects/bd/c3d588f2d6744e3afd7f1d090d7f84b0fc82bf": "09805064e472c845be9160d2f6980151",
".git/objects/cd/c86c9a6f914f470212e1d48ad3e0cb74c5d167": "6eb1d1a47a84a8b53ad2169235472c7b",
".git/objects/da/63235e90f840c38ca5f9b1215c73704d1a04de": "e93c9c5636a3ed04ded73b608e002ef4",
".git/packed-refs": "166d6d1ab177d02ea7913c3b34ab1954",
".git/refs/heads/main": "99a4a0c7c214ae473fa10b7e05e69d60",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/sourcetreeconfig.json": "91f1cd6462fbcbc34bd93a79d7cc7304",
"assets/AssetManifest.json": "c9519d1034311bc7147e847d17d37d0c",
"assets/assets/images/icon_background.png": "e5698481e4e3f9282664821c4e300d88",
"assets/assets/images/icon_background_jpg.jpeg": "0365a1361dd8b1186f401029fe788443",
"assets/assets/images/icon_solid_2.png": "a8ff33b4cdf8eec63e8b8f8f8581f686",
"assets/assets/images/icon_transparent_2.png": "a8ff33b4cdf8eec63e8b8f8f8581f686",
"assets/assets/images/launcher.png": "e277929064ec6fb7d8e3b53aad285fb8",
"assets/assets/images/logo.png": "8538f562293bf02e915f35bc9eb33021",
"assets/assets/images/logo_transparent_purple.png": "5af70a4e5772d0ca0556153bc7e0eacb",
"assets/assets/images/logo_white.png": "3977166cdfc0ba926a55eaf4529060ae",
"assets/assets/images/logo_white_small.png": "4fb1cafa892783b3a1fd3c3766598208",
"assets/assets/images/logo_white_small_2.png": "8e499a2bf30949e5d8dea4d63c2c26d4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d34d3bfb36b16cf30a2c817fd7ca6295",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f3cb0753c08cf40110a2843398db6de2",
"/": "f3cb0753c08cf40110a2843398db6de2",
"main.dart.js": "870b62503e7d1e08d57a6d45b76615d2",
"manifest.json": "795153828217091c0cdf42e960117547",
"notes.txt": "04e4d18d7858e36024a155a9ec548f4a",
"README.md": "cbb7023dbcad69e47e5871786163dcb7",
"splash/img/dark-1x.png": "305ad691e0b1b927fd495fa87b303ff7",
"splash/img/dark-2x.png": "1f120a026cbb60b148a45f145f4c67a1",
"splash/img/dark-3x.png": "e16e9d240405001c33e16ad1a1bc1619",
"splash/img/dark-4x.png": "a9644303d2d22a61acd8894b2f111b5a",
"splash/img/light-1x.png": "305ad691e0b1b927fd495fa87b303ff7",
"splash/img/light-2x.png": "1f120a026cbb60b148a45f145f4c67a1",
"splash/img/light-3x.png": "e16e9d240405001c33e16ad1a1bc1619",
"splash/img/light-4x.png": "a9644303d2d22a61acd8894b2f111b5a",
"splash/style.css": "db4fcce130250c2e54a54198b9308925",
"version.json": "61233e7aab1695b91925173f148153e7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
