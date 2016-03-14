/*
 * zxxFile.js åŸºäºŽHTML5 æ–‡ä»¶ä¸Šä¼ çš„æ ¸å¿ƒè„šæœ¬ http://www.zhangxinxu.com/wordpress/?p=1923
 * by zhangxinxu 2011-09-12
*/

var ZXXFILE = {
	fileInput: null,				//html fileæŽ§ä»¶
	dragDrop: null,					//æ‹–æ‹½æ•æ„ŸåŒºåŸŸ
	upButton: null,					//æäº¤æŒ‰é’®
	url: "",						//ajaxåœ°å€
	fileFilter: [],					//è¿‡æ»¤åŽçš„æ–‡ä»¶æ•°ç»„
	filter: function(files) {		//é€‰æ‹©æ–‡ä»¶ç»„çš„è¿‡æ»¤æ–¹æ³•
		return files;	
	},
	onSelect: function() {},		//æ–‡ä»¶é€‰æ‹©åŽ
	onDelete: function() {},		//æ–‡ä»¶åˆ é™¤åŽ
	onDragOver: function() {},		//æ–‡ä»¶æ‹–æ‹½åˆ°æ•æ„ŸåŒºåŸŸæ—¶
	onDragLeave: function() {},	//æ–‡ä»¶ç¦»å¼€åˆ°æ•æ„ŸåŒºåŸŸæ—¶
	onProgress: function() {},		//æ–‡ä»¶ä¸Šä¼ è¿›åº¦
	onSuccess: function() {},		//æ–‡ä»¶ä¸Šä¼ æˆåŠŸæ—¶
	onFailure: function() {},		//æ–‡ä»¶ä¸Šä¼ å¤±è´¥æ—¶,
	onComplete: function() {},		//æ–‡ä»¶å…¨éƒ¨ä¸Šä¼ å®Œæ¯•æ—¶
	
	/* å¼€å‘å‚æ•°å’Œå†…ç½®æ–¹æ³•åˆ†ç•Œçº¿ */
	
	//æ–‡ä»¶æ‹–æ”¾
	funDragHover: function(e) {
		e.stopPropagation();
		e.preventDefault();
		this[e.type === "dragover"? "onDragOver": "onDragLeave"].call(e.target);
		return this;
	},
	//èŽ·å–é€‰æ‹©æ–‡ä»¶ï¼ŒfileæŽ§ä»¶æˆ–æ‹–æ”¾
	funGetFiles: function(e) {
		// å–æ¶ˆé¼ æ ‡ç»è¿‡æ ·å¼
		this.funDragHover(e);
				
		// èŽ·å–æ–‡ä»¶åˆ—è¡¨å¯¹è±¡
		var files = e.target.files || e.dataTransfer.files;
		//ç»§ç»­æ·»åŠ æ–‡ä»¶
		this.fileFilter = this.fileFilter.concat(this.filter(files));
		this.funDealFiles();
		return this;
	},
	
	//é€‰ä¸­æ–‡ä»¶çš„å¤„ç†ä¸Žå›žè°ƒ
	funDealFiles: function() {
		for (var i = 0, file; file = this.fileFilter[i]; i++) {
			//å¢žåŠ å”¯ä¸€ç´¢å¼•å€¼
			file.index = i;
		}
		//æ‰§è¡Œé€‰æ‹©å›žè°ƒ
		this.onSelect(this.fileFilter);
		return this;
	},
	
	//åˆ é™¤å¯¹åº”çš„æ–‡ä»¶
	funDeleteFile: function(fileDelete) {
		var arrFile = [];
		for (var i = 0, file; file = this.fileFilter[i]; i++) {
			if (file != fileDelete) {
				arrFile.push(file);
			} else {
				this.onDelete(fileDelete);	
			}
		}
		this.fileFilter = arrFile;
		return this;
	},
	
	//æ–‡ä»¶ä¸Šä¼ 
	funUploadFile: function() {
		var self = this;	
		if (location.host.indexOf("sitepointstatic") >= 0) {
			//éžç«™ç‚¹æœåŠ¡å™¨ä¸Šè¿è¡Œ
			return;	
		}
		for (var i = 0, file; file = this.fileFilter[i]; i++) {
			(function(file) {
				var xhr = new XMLHttpRequest();
				if (xhr.upload) {
					// ä¸Šä¼ ä¸­
					xhr.upload.addEventListener("progress", function(e) {
						self.onProgress(file, e.loaded, e.total);
					}, false);
		
					// æ–‡ä»¶ä¸Šä¼ æˆåŠŸæˆ–æ˜¯å¤±è´¥
					xhr.onreadystatechange = function(e) {
						if (xhr.readyState == 4) {
							if (xhr.status == 200) {
								self.onSuccess(file, xhr.responseText);
								self.funDeleteFile(file);
								if (!self.fileFilter.length) {
									//å…¨éƒ¨å®Œæ¯•
									self.onComplete();	
								}
							} else {
								self.onFailure(file, xhr.responseText);		
							}
						}
					};
		
					// å¼€å§‹ä¸Šä¼ 
					xhr.open("POST", self.url, true);
					xhr.setRequestHeader("X_FILENAME", file.name);
					xhr.send(file);
				}	
			})(file);	
		}	
			
	},
	
	init: function() {
		var self = this;
		
		if (this.dragDrop) {
			this.dragDrop.addEventListener("dragover", function(e) { self.funDragHover(e); }, false);
			this.dragDrop.addEventListener("dragleave", function(e) { self.funDragHover(e); }, false);
			this.dragDrop.addEventListener("drop", function(e) { self.funGetFiles(e); }, false);
		}
		
		//æ–‡ä»¶é€‰æ‹©æŽ§ä»¶é€‰æ‹©
		if (this.fileInput) {
			this.fileInput.addEventListener("change", function(e) { self.funGetFiles(e); }, false);	
		}
		
		//ä¸Šä¼ æŒ‰é’®æäº¤
		if (this.upButton) {
			this.upButton.addEventListener("click", function(e) { self.funUploadFile(e); }, false);	
		} 
	}
};
