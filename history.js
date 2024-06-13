// Watch History Module for Invidious | M7 / Movian Media Center
// Version: 1.0
// Author: F0R3V3R50F7
exports.history = function (page) {
    page.appendItem(plugin.id + ":search:", 'search', {
        title: 'Search Invidious...'
    });
    page.appendItem(plugin.id + ":recommended", 'video', {
        icon: Plugin.path + "recommendedoff.png",
    });
    page.appendItem(plugin.id + ":trending", 'video', {
        icon: Plugin.path + "trendingoff.png",
    });
    page.appendItem(plugin.id + ":music", 'video', {
        icon: Plugin.path + "musicoff.png",
    });
    page.appendItem(plugin.id + ":subscriptions", 'video', {
        icon: Plugin.path + "subsoff.png",
    });
    page.appendItem(plugin.id + ":history", 'video', {
        icon: Plugin.path + "historyon.png",
    });
    popup.notify('Clear Watch History in the Page-Menu / Plug-In Settings.', 5);
    popup.notify('Remove an Video From Watch History in the Item Menu. ', 5);
    page.options.createAction('clearHistory', 'Clear Watch History', function() {
        history.list = '[]';
        popup.notify('Watch History Cleared Successfully.', 3);
        page.redirect(plugin.id + ':recommended');
    });
    var historyList = JSON.parse(history.list);
    historyList.forEach(function(videoId) {
        try {
            var videoUrl = INVIDIOUS_INSTANCE + "/videos/" + videoId;
            var response = http.request(videoUrl);
            var videoData = JSON.parse(response);

            if (videoData) {
                var itemUrl = plugin.id + ':playvideo:' + encodeURIComponent(videoId);
                var item = page.appendItem(itemUrl, 'video', {
                    title: videoData.title,
                    icon: videoData.videoThumbnails[0].url,
                    description: videoData.description,
                });

                // Add an option to remove the video from history
                item.addOptAction('Remove from History', function() {
                    removeVideoIdFromHistory(videoId);
                    popup.notify('Video has been removed from history', 3);
                    // Refresh the history page to reflect the changes
                    page.redirect(plugin.id + ':history');
                });
            }
        } catch (e) {
            console.error("Error fetching video details for videoId " + videoId + ": " + e);
        }
    });
};