"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polyfill_1 = require("./polyfill");
(function () {
    if (typeof window !== "undefined") {
        var navigator_1 = window.navigator;
        if (navigator_1 && !navigator_1.locks) {
            var lockManager = new polyfill_1.LockManager();
            Object.defineProperty(navigator_1, "locks", {
                value: lockManager,
            });
        }
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FNb0I7QUFFcEIsQ0FBQztJQUNDLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLElBQU0sV0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUErQyxDQUFDO1FBQ3pFLElBQUksV0FBUyxJQUFJLENBQUMsV0FBUyxDQUFDLEtBQUssRUFBRTtZQUNqQyxJQUFNLFdBQVcsR0FBRyxJQUFJLHNCQUFXLEVBQUUsQ0FBQztZQUN0QyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVMsRUFBRSxPQUFPLEVBQUU7Z0JBQ3hDLEtBQUssRUFBRSxXQUFXO2FBQ25CLENBQUMsQ0FBQztTQUNKO0tBQ0Y7QUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTG9jayxcbiAgTG9ja0luZm8sXG4gIExvY2tNYW5hZ2VyLFxuICBMb2NrTWFuYWdlclNuYXBzaG90LFxuICBMb2Nrc0luZm8sXG59IGZyb20gXCIuL3BvbHlmaWxsXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY29uc3QgbmF2aWdhdG9yID0gd2luZG93Lm5hdmlnYXRvciBhcyBOYXZpZ2F0b3IgJiB7IGxvY2tzOiBMb2NrTWFuYWdlciB9O1xuICAgIGlmIChuYXZpZ2F0b3IgJiYgIW5hdmlnYXRvci5sb2Nrcykge1xuICAgICAgY29uc3QgbG9ja01hbmFnZXIgPSBuZXcgTG9ja01hbmFnZXIoKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuYXZpZ2F0b3IsIFwibG9ja3NcIiwge1xuICAgICAgICB2YWx1ZTogbG9ja01hbmFnZXIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pKCk7XG5cbmV4cG9ydCB0eXBlIHsgTG9jaywgTG9ja0luZm8sIExvY2tNYW5hZ2VyLCBMb2NrTWFuYWdlclNuYXBzaG90LCBMb2Nrc0luZm8gfTtcbiJdfQ==