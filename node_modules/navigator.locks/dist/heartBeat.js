"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeartBeat = void 0;
var HeartBeat = /** @class */ (function () {
    function HeartBeat(_a) {
        var _this = this;
        var key = _a.key, _b = _a.heartBeatIntervalTime, heartBeatIntervalTime = _b === void 0 ? 1000 : _b, _c = _a.heartBeatDetectIntervalTime, heartBeatDetectIntervalTime = _c === void 0 ? 1000 * 2 : _c;
        this._heartBeatIntervalId = null;
        this._heartBeatDetectIntervalId = null;
        this._key = key;
        this._heartBeatIntervalTime = heartBeatIntervalTime;
        this._heartBeatDetectIntervalTime = heartBeatDetectIntervalTime;
        window.addEventListener("unload", function () {
            _this.destroy();
        });
    }
    HeartBeat.prototype.start = function () {
        var _this = this;
        this._heartBeatIntervalId = setInterval(function () {
            _this._setLocalTime();
        }, this._heartBeatIntervalTime);
    };
    HeartBeat.prototype.destroy = function () {
        if (this._heartBeatIntervalId) {
            clearInterval(this._heartBeatIntervalId);
        }
        if (this._heartBeatDetectIntervalId) {
            clearInterval(this._heartBeatDetectIntervalId);
        }
    };
    HeartBeat.prototype._setLocalTime = function () {
        window.localStorage.setItem(this._key, Date.now().toString());
    };
    HeartBeat.prototype.detect = function (cb) {
        this._heartBeatDetectIntervalId = setInterval(function () {
            cb();
        }, this._heartBeatDetectIntervalTime);
    };
    return HeartBeat;
}());
exports.HeartBeat = HeartBeat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhcnRCZWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2hlYXJ0QmVhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtJQU9FLG1CQUFZLEVBUVg7UUFSRCxpQkFlQztZQWRDLEdBQUcsU0FBQSxFQUNILDZCQUE0QixFQUE1QixxQkFBcUIsbUJBQUcsSUFBSSxLQUFBLEVBQzVCLG1DQUFzQyxFQUF0QywyQkFBMkIsbUJBQUcsSUFBSSxHQUFHLENBQUMsS0FBQTtRQU5oQyx5QkFBb0IsR0FBeUMsSUFBSSxDQUFDO1FBQ2xFLCtCQUEwQixHQUNoQyxJQUFJLENBQUM7UUFVTCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMsc0JBQXNCLEdBQUcscUJBQXFCLENBQUM7UUFDcEQsSUFBSSxDQUFDLDRCQUE0QixHQUFHLDJCQUEyQixDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7WUFDaEMsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUM7WUFDdEMsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsMkJBQU8sR0FBUDtRQUNFLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzdCLGFBQWEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksSUFBSSxDQUFDLDBCQUEwQixFQUFFO1lBQ25DLGFBQWEsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFFTyxpQ0FBYSxHQUFyQjtRQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBTyxFQUFjO1FBQ25CLElBQUksQ0FBQywwQkFBMEIsR0FBRyxXQUFXLENBQUM7WUFDNUMsRUFBRSxFQUFFLENBQUM7UUFDUCxDQUFDLEVBQUUsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQWhERCxJQWdEQztBQWhEWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIZWFydEJlYXQge1xuICBwcml2YXRlIF9rZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBfaGVhcnRCZWF0SW50ZXJ2YWxUaW1lOiBudW1iZXI7XG4gIHByaXZhdGUgX2hlYXJ0QmVhdERldGVjdEludGVydmFsVGltZTogbnVtYmVyO1xuICBwcml2YXRlIF9oZWFydEJlYXRJbnRlcnZhbElkOiBudWxsIHwgUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gPSBudWxsO1xuICBwcml2YXRlIF9oZWFydEJlYXREZXRlY3RJbnRlcnZhbElkOiBudWxsIHwgUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gPVxuICAgIG51bGw7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBrZXksXG4gICAgaGVhcnRCZWF0SW50ZXJ2YWxUaW1lID0gMTAwMCxcbiAgICBoZWFydEJlYXREZXRlY3RJbnRlcnZhbFRpbWUgPSAxMDAwICogMixcbiAgfToge1xuICAgIGtleTogc3RyaW5nO1xuICAgIGhlYXJ0QmVhdEludGVydmFsVGltZT86IG51bWJlcjtcbiAgICBoZWFydEJlYXREZXRlY3RJbnRlcnZhbFRpbWU/OiBudW1iZXI7XG4gIH0pIHtcbiAgICB0aGlzLl9rZXkgPSBrZXk7XG4gICAgdGhpcy5faGVhcnRCZWF0SW50ZXJ2YWxUaW1lID0gaGVhcnRCZWF0SW50ZXJ2YWxUaW1lO1xuICAgIHRoaXMuX2hlYXJ0QmVhdERldGVjdEludGVydmFsVGltZSA9IGhlYXJ0QmVhdERldGVjdEludGVydmFsVGltZTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuX2hlYXJ0QmVhdEludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLl9zZXRMb2NhbFRpbWUoKTtcbiAgICB9LCB0aGlzLl9oZWFydEJlYXRJbnRlcnZhbFRpbWUpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5faGVhcnRCZWF0SW50ZXJ2YWxJZCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9oZWFydEJlYXRJbnRlcnZhbElkKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hlYXJ0QmVhdERldGVjdEludGVydmFsSWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faGVhcnRCZWF0RGV0ZWN0SW50ZXJ2YWxJZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0TG9jYWxUaW1lKCkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9rZXksIERhdGUubm93KCkudG9TdHJpbmcoKSk7XG4gIH1cblxuICBkZXRlY3QoY2I6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9oZWFydEJlYXREZXRlY3RJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY2IoKTtcbiAgICB9LCB0aGlzLl9oZWFydEJlYXREZXRlY3RJbnRlcnZhbFRpbWUpO1xuICB9XG59XG4iXX0=