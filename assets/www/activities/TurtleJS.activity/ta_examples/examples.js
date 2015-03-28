/* Copyright (c) 2014 Jorge Alberto Gómez López <gomezlopez.jorge96@gmail.com>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.*/

var examples = {};

examples['card-01'] = '[[0, ["start2", 0], 1000, 1000, [null, 1, null]], [1, "forward", 938, 286, [0, 2, null]], [2, ["number", 100.0], 1009, 286, [1, null]]]';
examples['card-02'] = '[[0, ["start2", 21], 1000, 1000, [null, 1, null]], [1, "forward", 938, 286, [0, 2, 3]], [2, ["number", 100.0], 1009, 286, [1, null]], [3, "right", 938, 328, [1, 4, null]], [4, ["number", 90], 996, 328, [3, null]]]';
examples['card-03'] = '[[0, ["start2", 51], 1000, 1000, [null, 1, null]], [1, ["repeat", 21], 418, 266, [0, 2, 3, null]], [2, ["number", 4], 477, 266, [1, null]], [3, "forward", 436, 308, [1, 6, 4]], [4, "right", 436, 350, [3, 5, null]], [5, ["number", 90], 494, 350, [4, null]], [6, ["number", 100], 507, 308, [3, null]]]';
examples['card-04'] = '[[0, ["start2", 0], 720, 950, [null, 9, null]], [1, "forward", 436, 336, [5, 2, 3]], [2, ["number", 100.0], 507, 336, [1, null]], [3, "right", 436, 378, [1, 4, null]], [4, ["number", 90], 494, 378, [3, null]], [5, ["repeat", 21], 418, 294, [7, 6, 1, null]], [6, ["number", 4], 477, 294, [5, null]], [7, ["hat", 51], 400, 950, [null, 8, 5, null]], [8, ["string", "action"], 456, 252, [7, null]], [9, "stack", 938, 286, [0, 10, null]], [10, ["string", "action"], 996, 286, [9, null]]]';
examples['card-05'] = '[[0, ["start2", 21], 720, 940, [null, 11, null]], [1, "forward", 436, 336, [5, 2, 3]], [2, ["number", 100.0], 507, 336, [1, null]], [3, "right", 436, 378, [1, 4, null]], [4, ["number", 90], 494, 378, [3, null]], [5, ["repeat", 21], 418, 294, [7, 6, 1, null]], [6, ["number", 4], 477, 294, [5, null]], [7, ["hat", 51], 400, 940, [null, 8, 5, null]], [8, ["string", "action"], 456, 252, [7, null]], [9, "stack", 938, 328, [11, 10, null]], [10, ["string", "action"], 996, 328, [9, null]], [11, "right", 938, 286, [0, 12, 9]], [12, ["number", 45.0], 996, 286, [11, null]]]';
examples['card-06'] = '[[0, ["start2", 51], 740, 940, [null, 13, null]], [1, "forward", 336, 336, [5, 2, 3]], [2, ["number", 100.0], 407, 336, [1, null]], [3, "right", 336, 378, [1, 4, null]], [4, ["number", 90], 394, 378, [3, null]], [5, ["repeat", 21], 318, 294, [7, 6, 1, null]], [6, ["number", 4], 377, 294, [5, null]], [7, ["hat", 51], 400, 940, [null, 8, 5, null]], [8, ["string", "action"], 356, 252, [7, null]], [9, "stack", 876, 370, [11, 10, null]], [10, ["string", "action"], 934, 370, [9, null]], [11, "right", 876, 328, [13, 12, 9]], [12, ["number", 45.0], 934, 328, [11, null]], [13, ["repeat", 21], 858, 286, [0, 14, 11, null]], [14, ["number", 8.0], 917, 286, [13, null]]]';
examples['card-07'] = '[[0, ["start2", 51], 740, 940, [null, 13, null]], [1, "forward", 336, 336, [5, 2, 3]], [2, ["number", 100.0], 407, 336, [1, null]], [3, "right", 336, 378, [1, 4, null]], [4, ["number", 72.0], 394, 378, [3, null]], [5, ["repeat", 21], 318, 294, [7, 6, 1, null]], [6, ["number", 5.0], 377, 294, [5, null]], [7, ["hat", 51], 400, 940, [null, 8, 5, null]], [8, ["string", "action"], 356, 252, [7, null]], [9, "stack", 876, 370, [11, 10, null]], [10, ["string", "action"], 934, 370, [9, null]], [11, "right", 876, 328, [13, 12, 9]], [12, ["number", 36.0], 934, 328, [11, null]], [13, ["repeat", 21], 858, 286, [0, 14, 11, null]], [14, ["number", 10.0], 917, 286, [13, null]]]';
examples['card-08'] = '[[0, ["start2", 72], 740, 940, [null, 15, null]], [1, "forward", 336, 336, [5, 2, 3]], [2, ["number", 100.0], 407, 336, [1, null]], [3, "right", 336, 378, [1, 4, null]], [4, ["number", 72.0], 394, 378, [3, null]], [5, ["repeat", 21], 318, 294, [7, 6, 1, null]], [6, ["number", 5.0], 377, 294, [5, null]], [7, ["hat", 51], 400, 940, [null, 8, 5, null]], [8, ["string", "action"], 356, 252, [7, null]], [9, "stack", 876, 412, [11, 10, null]], [10, ["string", "action"], 934, 412, [9, null]], [11, "right", 876, 370, [13, 12, 9]], [12, ["number", 36.0], 934, 370, [11, null]], [13, ["repeat", 21], 858, 328, [15, 14, 11, null]], [14, ["number", 10.0], 917, 328, [13, null]], [15, "setcolor", 858, 286, [0, 16, 13]], [16, "blue", 935, 286, [15, null]]]';
examples['card-09'] = '[[0, ["start2", 93], 740, 940, [null, 15, null]], [1, "forward", 336, 336, [5, 2, 3]], [2, ["number", 100.0], 407, 336, [1, null]], [3, "right", 336, 378, [1, 4, null]], [4, ["number", 72.0], 394, 378, [3, null]], [5, ["repeat", 21], 318, 294, [7, 6, 1, null]], [6, ["number", 5.0], 377, 294, [5, null]], [7, ["hat", 51], 400, 940, [null, 8, 5, null]], [8, ["string", "action"], 356, 252, [7, null]], [9, "stack", 876, 454, [11, 10, null]], [10, ["string", "action"], 934, 454, [9, null]], [11, "right", 876, 412, [13, 12, 9]], [12, ["number", 36.0], 934, 412, [11, null]], [13, ["repeat", 21], 858, 370, [17, 14, 11, null]], [14, ["number", 10.0], 917, 370, [13, null]], [15, "setcolor", 858, 286, [0, 16, 17]], [16, "blue", 935, 286, [15, null]], [17, "setpensize", 858, 328, [15, 18, 13]], [18, ["number", 15.0], 960, 328, [17, null]]]';
examples['card-10'] = '[[0, ["start2", 114], 740, 940, [null, 15, null]], [1, "forward", 336, 336, [5, 2, 3]], [2, ["number", 100.0], 407, 336, [1, null]], [3, "right", 336, 378, [1, 4, null]], [4, ["number", 72.0], 394, 378, [3, null]], [5, ["repeat", 21], 318, 294, [7, 6, 1, null]], [6, ["number", 5.0], 377, 294, [5, null]], [7, ["hat", 51], 400, 940, [null, 8, 5, null]], [8, ["string", "action"], 356, 252, [7, null]], [9, "stack", 876, 454, [11, 10, 18]], [10, ["string", "action"], 934, 454, [9, null]], [11, "right", 876, 412, [13, 12, 9]], [12, ["number", 36.0], 934, 412, [11, null]], [13, ["repeat", 42], 858, 370, [16, 14, 11, null]], [14, ["number", 10.0], 917, 370, [13, null]], [15, "setcolor", 858, 286, [0, 21, 16]], [16, "setpensize", 858, 328, [15, 17, 13]], [17, ["number", 15.0], 960, 328, [16, null]], [18, "setcolor", 876, 496, [9, 20, null]], [19, ["number", 10.0], 1007, 538, [20, null]], [20, ["plus2", 0], 953, 496, [18, 22, 19]], [21, "red", 935, 286, [15, null]], [22, "color", 1007, 496, [20, null]]]';
examples['card-11'] = '[[0, ["start2", 42], 700, 920, [null, 1, null]], [1, ["storein", 0], 818, 366, [0, 2, 3, 13]], [2, ["string", "my box_1"], 886, 366, [1, null]], [3, ["number", 100.0], 886, 408, [1, null]], [4, ["hat", 51], 400, 920, [null, 5, 9, null]], [5, ["string", "action"], 496, 332, [4, null]], [6, "forward", 476, 416, [9, 11, 7]], [7, "right", 476, 458, [6, 8, null]], [8, ["number", 90], 534, 458, [7, null]], [9, ["repeat", 21], 458, 374, [4, 10, 6, null]], [10, ["number", 4], 517, 374, [9, null]], [11, "box", 547, 416, [6, 12, null]], [12, ["string", "my box_1"], 602, 416, [11, null]], [13, "stack", 818, 450, [1, 14, null]], [14, ["string", "action"], 876, 450, [13, null]]]';
examples['card-12'] = '[[0, ["start2", 114], 1080, 940, [null, 1, null]], [1, ["storein", 0], 938, 286, [0, 2, 3, 13]], [2, ["string", "my box_1"], 1006, 286, [1, null]], [3, ["number", 10.0], 1006, 328, [1, null]], [4, ["hat", 51], 440, 920, [null, 5, 9, null]], [5, ["string", "action"], 496, 332, [4, null]], [6, "forward", 476, 416, [9, 11, 7]], [7, "right", 476, 458, [6, 8, null]], [8, ["number", 90], 534, 458, [7, null]], [9, ["repeat", 21], 458, 374, [4, 10, 6, null]], [10, ["number", 4], 517, 374, [9, null]], [11, "box", 547, 416, [6, 12, null]], [12, ["string", "my box_1"], 602, 416, [11, null]], [13, ["repeat", 42], 938, 370, [1, 14, 15, null]], [14, ["number", 12.0], 997, 370, [13, null]], [15, "stack", 956, 412, [13, 16, 17]], [16, ["string", "action"], 1014, 412, [15, null]], [17, ["storein", 0], 956, 454, [15, 18, 22, null]], [18, ["string", "my box_1"], 1024, 454, [17, null]], [19, "box", 1078, 496, [22, 20, null]], [20, ["string", "my box_1"], 1133, 496, [19, null]], [21, ["number", 20.0], 1078, 538, [22, null]], [22, ["plus2", 0], 1024, 496, [17, 19, 21]]]';
examples['card-13'] = '[[0, ["start2", 135], 1080, 920, [null, 1, null]], [1, ["storein", 0], 935, 266, [0, 2, 3, 21]], [2, ["string", "my box_1"], 1003, 266, [1, null]], [3, ["number", 220.0], 1003, 308, [1, null]], [4, ["hat", 51], 440, 920, [null, 5, 9, null]], [5, ["string", "action"], 496, 332, [4, null]], [6, "forward", 476, 416, [9, 11, 7]], [7, "right", 476, 458, [6, 8, null]], [8, ["number", 90], 534, 458, [7, null]], [9, ["repeat", 21], 458, 374, [4, 10, 6, null]], [10, ["number", 4], 517, 374, [9, null]], [11, "box", 547, 416, [6, 12, null]], [12, ["string", "my box_1"], 602, 416, [11, null]], [13, "stack", 953, 434, [23, 14, 19]], [14, ["string", "action"], 1011, 434, [13, null]], [15, ["minus2", 0], 1021, 518, [19, 17, 16]], [16, ["number", 20.0], 1118, 560, [15, null]], [17, "box", 1094, 518, [15, 18, null]], [18, ["string", "my box_1"], 1149, 518, [17, null]], [19, ["storein", 0], 953, 476, [13, 20, 15, null]], [20, ["string", "my box_1"], 1021, 476, [19, null]], [21, ["repeat", 63], 935, 350, [1, 22, 23, null]], [22, ["number", 12.0], 994, 350, [21, null]], [23, "setcolor", 953, 392, [21, 24, 13]], [24, "box", 1030, 392, [23, 25, null]], [25, ["string", "my box_1"], 1085, 392, [24, null]]]';
examples['card-14'] = '[[0, ["start2", 135], 1080, 900, [null, 1, null]], [1, ["storein", 0], 938, 246, [0, 2, 3, 21]], [2, ["string", "my box_1"], 1006, 246, [1, null]], [3, ["number", 220.0], 1006, 288, [1, null]], [4, ["hat", 93], 420, 960, [null, 5, 26, null]], [5, ["string", "action"], 476, 272, [4, null]], [6, "forward", 456, 398, [9, 11, 7]], [7, "right", 456, 440, [6, 8, null]], [8, ["number", 90], 514, 440, [7, null]], [9, ["repeat", 21], 438, 356, [26, 10, 6, 27]], [10, ["number", 4], 497, 356, [9, null]], [11, "box", 527, 398, [6, 12, null]], [12, ["string", "my box_1"], 582, 398, [11, null]], [13, "stack", 956, 414, [23, 14, 19]], [14, ["string", "action"], 1014, 414, [13, null]], [15, ["minus2", 0], 1024, 498, [19, 17, 16]], [16, ["number", 20.0], 1121, 540, [15, null]], [17, "box", 1097, 498, [15, 18, null]], [18, ["string", "my box_1"], 1152, 498, [17, null]], [19, ["storein", 0], 956, 456, [13, 20, 15, null]], [20, ["string", "my box_1"], 1024, 456, [19, null]], [21, ["repeat", 63], 938, 330, [1, 22, 23, null]], [22, ["number", 12.0], 997, 330, [21, null]], [23, "setcolor", 956, 372, [21, 24, 13]], [24, "box", 1033, 372, [23, 25, null]], [25, ["string", "my box_1"], 1088, 372, [24, null]], [26, "startfill", 438, 314, [4, 9]], [27, "stopfill", 438, 500, [9, null]]]';
examples['card-15'] = '[[0, ["start2", 72], 720, 940, [null, 7, null]], [1, "forward", 956, 328, [7, 2, 3]], [2, ["number", 200], 1027, 328, [1, null]], [3, "back", 956, 370, [1, 4, 5]], [4, ["number", 200], 1014, 370, [3, null]], [5, "right", 956, 412, [3, 6, null]], [6, ["number", 10], 1014, 412, [5, null]], [7, ["repeat", 42], 938, 286, [0, 8, 1, null]], [8, ["number", 36], 997, 286, [7, null]]] ';
examples['card-16'] = '[[0, ["start2", 93], 720, 900, [null, 7, null]], [1, "forward", 916, 288, [7, 2, 3]], [2, ["number", 200], 987, 288, [1, null]], [3, "back", 916, 330, [1, 4, 5]], [4, ["number", 200], 974, 330, [3, null]], [5, "right", 916, 372, [3, 6, 10]], [6, ["number", 10], 974, 372, [5, null]], [7, ["repeat", 63], 898, 246, [0, 8, 1, null]], [8, ["number", 36], 957, 246, [7, null]], [9, "heading", 993, 414, [10, null]], [10, "setcolor", 916, 414, [5, 9, null]]]';
examples['card-17'] = '[[0, ["start2", 177], 1040, 760, [null, 27, null]], [1, ["hat", 125], 440, 800, [null, 2, 18]], [2, ["string", "circle"], 496, 212, [1, null]], [3, ["repeat", 0], 818, 500, [17, 4, 7, null]], [4, ["number", 10], 877, 500, [3, null]], [5, ["storein", 0], 818, 374, [28, 6, 15, 17]], [6, ["string", "diameter"], 886, 374, [5, null]], [7, "stack", 836, 542, [3, 8, null]], [8, ["string", "circle"], 894, 542, [7, null]], [9, "box", 570, 422, [11, 10, null]], [10, ["string", "diameter"], 625, 422, [9, null]], [11, ["plus2", 0], 516, 380, [24, 25, 9]], [12, "box", 586, 296, [21, 13, null]], [13, ["string", "diameter"], 641, 296, [12, null]], [14, "width", 956, 416, [15, null]], [15, ["division2", 0], 886, 416, [5, 14, 16]], [16, ["number", 10], 980, 458, [15, null]], [17, ["vspace", 0], 818, 458, [5, 3]], [18, ["arc", 0], 458, 254, [1, 19, 21, 22]], [19, ["number", 360], 516, 254, [18, null]], [20, ["number", 2], 610, 338, [21, null]], [21, ["division2", 0], 516, 296, [18, 12, 20]], [22, "penup", 458, 338, [18, 24]], [23, "pendown", 458, 504, [24, null]], [24, ["setxy2", 20], 458, 380, [22, 11, 26, 23]], [25, "xcor", 570, 380, [11, null]], [26, "ycor", 516, 462, [24, null]], [27, "penup", 818, 206, [0, 29]], [28, "pendown", 818, 332, [29, 5]], [29, ["setxy2", 0], 818, 248, [27, 31, 30, 28]], [30, ["number", 0], 876, 290, [29, null]], [31, "leftpos", 876, 248, [29, null]]]';
examples['card-18'] = '[[0, ["start2", 105], 420, 880, [null, 17, null]], [1, ["repeat", 21], 958, 414, [5, 2, 15, null]], [2, ["number", 5], 1017, 414, [1, null]], [3, ["repeat", 21], 958, 174, [7, 4, 9, null]], [4, ["number", 4], 1017, 174, [3, null]], [5, ["hat", 51], 740, 960, [null, 6, 1]], [6, ["string", "spinner"], 996, 372, [5, null]], [7, ["hat", 51], 1240, 1020, [null, 8, 3]], [8, ["string", "square"], 996, 132, [7, null]], [9, "forward", 976, 216, [3, 10, 11]], [10, ["number", 200], 1047, 216, [9, null]], [11, "right", 976, 258, [9, 12, null]], [12, ["number", 90], 1034, 258, [11, null]], [13, "right", 976, 498, [15, 14, null]], [14, ["number", 72], 1034, 498, [13, null]], [15, "stack", 976, 456, [1, 16, 13]], [16, ["string", "square"], 1034, 456, [15, null]], [17, "setpensize", 338, 226, [0, 18, 27]], [18, ["number", 25], 440, 226, [17, null]], [19, "setpensize", 338, 352, [23, 20, 21]], [20, ["number", 5], 440, 352, [19, null]], [21, "setcolor", 338, 394, [19, 22, 25]], [22, "yellow", 415, 394, [21, null]], [23, "stack", 338, 310, [27, 24, 19]], [24, ["string", "spinner"], 396, 310, [23, null]], [25, "stack", 338, 436, [21, 26, null]], [26, ["string", "spinner"], 396, 436, [25, null]], [27, "setcolor", 338, 268, [17, 28, 23]], [28, "red", 415, 268, [27, null]]]';
examples['card-19'] = '[[0, ["start2", 63], 411, 921, [null, 1, null]], [1, ["arc", 0], 429, 267, [0, 2, 3, 4]], [2, ["number", 180], 487, 267, [1, null]], [3, ["number", 100], 487, 309, [1, null]], [4, ["arc", 0], 429, 351, [1, 5, 6, null]], [5, ["number", -180], 487, 351, [4, null]], [6, ["number", 100], 487, 393, [4, null]]] ';
examples['card-20'] = '[[0, ["start2", 168], 477, 756, [null, 9, null]], [1, ["arc", 0], 395, 286, [7, 2, 3, 11]], [2, ["number", 180], 453, 286, [1, null]], [3, ["number", 100], 453, 328, [1, null]], [4, ["arc", 0], 395, 496, [15, 5, 6, null]], [5, ["number", -180], 453, 496, [4, null]], [6, ["number", 100], 453, 538, [4, null]], [7, "setcolor", 395, 244, [9, 13, 1]], [8, "setcolor", 395, 412, [11, 14, 15]], [9, "setpensize", 395, 202, [0, 10, 7]], [10, ["number", 25], 497, 202, [9, null]], [11, "setpensize", 395, 370, [1, 12, 8]], [12, ["number", 10], 497, 370, [11, null]], [13, "red", 472, 244, [7, null]], [14, "yellow", 472, 412, [8, null]], [15, "right", 395, 454, [8, 16, 4]], [16, ["number", 180], 453, 454, [15, null]]]';
examples['card-21'] = '[[0, ["start2", 146], 260, 80, [null, 1, null]], [1, ["storein", 0], 278, 126, [0, 2, 3, 4]], [2, ["string", "sides"], 346, 126, [1, null]], [3, ["number", 3], 346, 168, [1, null]], [4, "penup", 278, 210, [1, 16]], [5, "pendown", 278, 376, [16, 8]], [6, ["hat", 176], 560, 80, [null, 7, 33]], [7, ["string", "action"], 616, 92, [6, null]], [8, "stack", 278, 418, [5, 9, null]], [9, ["string", "action"], 336, 418, [8, null]], [10, ["plus2", 0], 336, 252, [16, 14, 12]], [11, ["plus2", 0], 336, 334, [16, 15, 13]], [12, ["number", 75], 390, 294, [10, null]], [13, ["number", 75], 390, 376, [11, null]], [14, "leftpos", 390, 252, [10, null]], [15, "bottompos", 390, 334, [11, null]], [16, ["setxy2", 20], 278, 252, [4, 10, 11, 5]], [17, ["hat", 93], 920, 80, [null, 18, 24]], [18, ["string", "polygon"], 976, 92, [17, null]], [19, ["repeat", 21], 938, 176, [24, 20, 22, 25]], [20, "box", 997, 176, [19, 21, null]], [21, ["string", "sides"], 1052, 176, [20, null]], [22, "forward", 956, 218, [19, 23, 26]], [23, ["number", 75], 1027, 218, [22, null]], [24, "startfill", 938, 134, [17, 19]], [25, "stopfill", 938, 320, [19, null]], [26, "right", 956, 260, [22, 28, null]], [27, ["number", 360], 1084, 260, [28, null]], [28, ["division2", 0], 1014, 260, [26, 27, 29]], [29, "box", 1108, 302, [28, 30, null]], [30, ["string", "sides"], 1163, 302, [29, null]], [31, "stack", 596, 176, [33, 32, 35]], [32, ["string", "polygon"], 654, 176, [31, null]], [33, ["repeat", 146], 578, 134, [6, 34, 31, null]], [34, ["number", 5], 637, 134, [33, null]], [35, ["storein", 0], 596, 218, [31, 36, 40, 44]], [36, ["string", "sides"], 664, 218, [35, null]], [37, ["number", 1], 718, 302, [40, null]], [38, "box", 718, 260, [40, 39, null]], [39, ["string", "sides"], 773, 260, [38, null]], [40, ["plus2", 0], 664, 260, [35, 38, 37]], [41, ["setxy2", 20], 596, 344, [44, 47, 46, 45]], [42, ["number", 100], 708, 386, [47, null]], [43, ["number", 100], 708, 468, [46, null]], [44, "penup", 596, 302, [35, 41]], [45, "pendown", 596, 468, [41, null]], [46, ["plus2", 0], 654, 426, [41, 49, 43]], [47, ["plus2", 0], 654, 344, [41, 48, 42]], [48, "xcor", 708, 344, [47, null]], [49, "ycor", 708, 426, [46, null]]]';
examples['card-22'] = '[[0, ["start2", 135], 720, 775, [null, 1, null]], [1, ["storein", 0], 765, 221, [0, 2, 3, 10]], [2, ["string", "side"], 833, 221, [1, null]], [3, ["number", 10], 833, 263, [1, null]], [4, ["storein", 0], 783, 431, [13, 5, 9, null]], [5, ["string", "side"], 851, 431, [4, null]], [6, ["number", 10], 905, 515, [9, null]], [7, "box", 905, 473, [9, 8, null]], [8, ["string", "side"], 960, 473, [7, null]], [9, ["plus2", 0], 851, 473, [4, 7, 6]], [10, ["repeat", 63], 765, 305, [1, 11, 12, null]], [11, ["number", 40], 824, 305, [10, null]], [12, "forward", 783, 347, [10, 15, 13]], [13, "right", 783, 389, [12, 14, 4]], [14, ["number", 89], 841, 389, [13, null]], [15, "box", 854, 347, [12, 16, null]], [16, ["string", "side"], 909, 347, [15, null]]]';
examples['card-23'] = '[[0, ["start2", 84], 720, 960, [null, 20, null]], [1, ["repeat", 21], 1058, 234, [5, 2, 14, null]], [2, ["number", 10], 1117, 234, [1, null]], [3, ["repeat", 21], 1058, 474, [7, 4, 9, null]], [4, ["number", 4], 1117, 474, [3, null]], [5, ["hat", 51], 1040, 680, [null, 6, 1]], [6, ["string", "spinner"], 1096, 192, [5, null]], [7, ["hat", 51], 1040, 920, [null, 8, 3]], [8, ["string", "square"], 1096, 432, [7, null]], [9, "forward", 1076, 516, [3, 18, 10]], [10, "right", 1076, 558, [9, 11, null]], [11, ["number", 90], 1134, 558, [10, null]], [12, "right", 1076, 318, [14, 13, null]], [13, ["number", 36], 1134, 318, [12, null]], [14, "stack", 1076, 276, [1, 15, 12]], [15, ["string", "square"], 1134, 276, [14, null]], [16, ["number", 3], 467, 198, [32, null]], [17, "setcolor", 296, 156, [34, 32, 36]], [18, "box", 1147, 516, [9, 19, null]], [19, ["string", "side"], 1202, 516, [18, null]], [20, ["storein", 0], 818, 206, [0, 21, 22, 23]], [21, ["string", "side"], 886, 206, [20, null]], [22, ["number", 0], 886, 248, [20, null]], [23, ["storein", 0], 818, 290, [20, 24, 25, 28]], [24, ["string", "pen"], 886, 290, [23, null]], [25, ["number", 0], 886, 332, [23, null]], [26, ["hat", 219], 360, 760, [null, 27, 34]], [27, ["string", "action"], 316, 72, [26, null]], [28, "stack", 818, 374, [23, 29, null]], [29, ["string", "action"], 876, 374, [28, null]], [30, "setshade", 296, 240, [36, 33, 37]], [31, ["number", 100], 454, 240, [33, null]], [32, ["division2", 0], 373, 156, [17, 38, 16]], [33, ["minus2", 0], 381, 240, [30, 31, 40]], [34, ["repeat", 189], 278, 114, [26, 35, 17, null]], [35, ["number", 100], 337, 114, [34, null]], [36, ["vspace", 0], 296, 198, [17, 30]], [37, ["vspace", 0], 296, 282, [30, 42]], [38, "box", 443, 156, [32, 39, null]], [39, ["string", "pen"], 498, 156, [38, null]], [40, "box", 478, 282, [33, 41, null]], [41, ["string", "pen"], 533, 282, [40, null]], [42, "stack", 296, 324, [37, 43, 44]], [43, ["string", "spinner"], 354, 324, [42, null]], [44, ["storein", 0], 296, 366, [42, 45, 54, 56]], [45, ["string", "pen"], 364, 366, [44, null]], [46, ["number", 1], 418, 450, [54, null]], [47, ["storein", 0], 296, 492, [56, 48, 55, null]], [48, ["string", "side"], 364, 492, [47, null]], [49, ["number", 2], 418, 576, [55, null]], [50, "box", 418, 534, [55, 51, null]], [51, ["string", "side"], 473, 534, [50, null]], [52, "box", 418, 408, [54, 53, null]], [53, ["string", "pen"], 473, 408, [52, null]], [54, ["plus2", 0], 364, 408, [44, 52, 46]], [55, ["plus2", 0], 364, 534, [47, 50, 49]], [56, ["vspace", 0], 296, 450, [44, 47]]] ';
examples['card-24'] = '[[0, ["start2", 144], 460, 780, [null, 37, null]], [1, "forward", 514, 352, [19, 2, 3]], [2, "width", 585, 352, [1, null]], [3, "back", 514, 394, [1, 4, 21]], [4, "width", 572, 394, [3, null]], [5, "setpensize", 758, 234, [25, 8, 13]], [6, ["number", 1], 957, 276, [8, null]], [7, "pensize", 933, 234, [8, null]], [8, ["minus2", 0], 860, 234, [5, 7, 6]], [9, "setshade", 758, 318, [13, 12, null]], [10, ["number", 4], 897, 360, [12, null]], [11, "shade", 897, 318, [12, null]], [12, ["plus2", 0], 843, 318, [9, 11, 10]], [13, ["vspace", 0], 758, 276, [5, 9]], [14, "setcolor", 198, 444, [23, 32, 15]], [15, "setshade", 198, 486, [14, 16, null]], [16, ["number", 0], 283, 486, [15, null]], [17, ["repeat", 93], 478, 268, [37, 18, 19, null]], [18, ["number", 25], 537, 268, [17, null]], [19, ["repeat", 42], 496, 310, [17, 20, 1, 27]], [20, ["number", 30], 555, 310, [19, null]], [21, "right", 514, 436, [3, 22, null]], [22, ["number", 12], 572, 436, [21, null]], [23, "setpensize", 198, 402, [34, 24, 14]], [24, ["number", 30], 300, 402, [23, null]], [25, ["hat", 42], 1040, 780, [null, 26, 5]], [26, ["string", "update pen"], 796, 192, [25, null]], [27, "stack", 496, 496, [19, 28, null]], [28, ["string", "update pen"], 554, 496, [27, null]], [29, ["setxy2", 0], 198, 276, [33, 30, 31, 34]], [30, ["number", -200], 256, 276, [29, null]], [31, ["number", -100], 256, 318, [29, null]], [32, ["number", 15], 275, 444, [14, null]], [33, "penup", 198, 234, [35, 29]], [34, "pendown", 198, 360, [29, 23]], [35, ["hat", 126], 720, 780, [null, 36, 33]], [36, ["string", "setup"], 236, 192, [35, null]], [37, "stack", 478, 226, [0, 38, 17]], [38, ["string", "setup"], 536, 226, [37, null]]] ';
examples['card-25'] = '[[0, ["start2", 105], 180, 180, [null, 1, null]], [1, "penup", 198, 226, [0, 3]], [2, "pendown", 198, 352, [3, 6]], [3, ["setxy2", 0], 198, 268, [1, 4, 5, 2]], [4, ["number", -100], 256, 268, [3, null]], [5, ["number", 200], 256, 310, [3, null]], [6, "setpensize", 198, 394, [2, 7, 10]], [7, ["number", 30], 300, 394, [6, null]], [8, ["hat", 114], 460, 180, [null, 9, 12]], [9, ["string", "action"], 516, 192, [8, null]], [10, "stack", 198, 436, [6, 11, null]], [11, ["string", "action"], 256, 436, [10, null]], [12, ["repeat", 84], 478, 234, [8, 13, 16, null]], [13, ["number", 5], 537, 234, [12, null]], [14, ["hat", 155], 794, 183, [null, 15, 29]], [15, ["string", "line"], 850, 195, [14, null]], [16, "stack", 496, 276, [12, 17, 18]], [17, ["string", "line"], 554, 276, [16, null]], [18, "penup", 496, 318, [16, 20]], [19, "pendown", 496, 444, [20, null]], [20, ["setxy2", 0], 496, 360, [18, 21, 24, 19]], [21, ["number", -100], 554, 360, [20, null]], [22, ["number", 60], 651, 444, [24, null]], [23, "ycor", 627, 402, [24, null]], [24, ["minus2", 0], 554, 402, [20, 23, 22]], [25, "forward", 830, 279, [29, 26, 27]], [26, ["number", 1], 901, 279, [25, null]], [27, "back", 830, 321, [25, 28, 31]], [28, ["number", 1], 888, 321, [27, null]], [29, ["repeat", 125], 812, 237, [14, 30, 25, null]], [30, ["number", 5], 871, 237, [29, null]], [31, "penup", 830, 363, [27, 33]], [32, "pendown", 830, 529, [33, null]], [33, ["setxy2", 20], 830, 405, [31, 37, 35, 32]], [34, ["number", 60], 942, 447, [37, null]], [35, "ycor", 888, 487, [33, null]], [36, "xcor", 942, 405, [37, null]], [37, ["plus2", 0], 888, 405, [33, 36, 34]]]';
examples['card-26'] = '[[0, ["start2", 176], 1072, 718, [null, 1, null]], [1, ["repeat", 146], 890, 164, [0, 2, 8, null]], [2, ["number", 10], 949, 164, [1, null]], [3, "penup", 908, 248, [8, 7]], [4, "pendown", 908, 414, [7, 18]], [5, "forward", 908, 498, [18, 6, null]], [6, ["number", 1], 979, 498, [5, null]], [7, ["setxy2", 20], 908, 290, [3, 12, 15, 4]], [8, "setpensize", 908, 206, [1, 9, 3]], [9, ["random", 0], 1010, 206, [8, 10, 11, null]], [10, ["number", 10], 1096, 206, [9, null]], [11, ["number", 100], 1096, 248, [9, null]], [12, ["random", 0], 966, 290, [7, 13, 14, null]], [13, ["number", -200], 1052, 290, [12, null]], [14, ["number", 200], 1052, 332, [12, null]], [15, ["random", 0], 966, 372, [7, 16, 17, null]], [16, ["number", -150], 1052, 372, [15, null]], [17, ["number", 150], 1052, 414, [15, null]], [18, "setshade", 908, 456, [4, 19, 5]], [19, "pensize", 993, 456, [18, null]]]';
examples['card-27'] = '[[0, ["start2", 156], 728, 767, [null, 7, null]], [1, ["repeat", 84], 896, 297, [8, 2, 3, null]], [2, ["number", 200], 955, 297, [1, null]], [3, "forward", 914, 339, [1, 4, 5]], [4, ["number", 1], 985, 339, [3, null]], [5, "back", 914, 381, [3, 6, 11]], [6, ["number", 1], 972, 381, [5, null]], [7, "setcolor", 896, 213, [0, 10, 8]], [8, "setpensize", 896, 255, [7, 9, 1]], [9, ["number", 400], 998, 255, [8, null]], [10, "white", 973, 213, [7, null]], [11, "setshade", 914, 423, [5, 17, 19]], [12, ["number", 0.5], 1096, 465, [17, null]], [13, "setpensize", 914, 507, [19, 18, null]], [14, ["number", 2], 1113, 549, [18, null]], [15, "pensize", 1089, 507, [18, null]], [16, "shade", 1072, 423, [17, null]], [17, ["minus2", 0], 999, 423, [11, 16, 12]], [18, ["minus2", 0], 1016, 507, [13, 15, 14]], [19, ["vspace", 0], 914, 465, [11, 13]]]';
examples['card-28'] = '[[0, ["start2", 72], 728, 821, [null, 7, null]], [1, "forward", 914, 309, [7, 2, 3]], [2, ["number", 200], 985, 309, [1, null]], [3, "back", 914, 351, [1, 4, 5]], [4, ["number", 160], 972, 351, [3, null]], [5, "right", 914, 393, [3, 6, null]], [6, ["number", 60], 972, 393, [5, null]], [7, ["repeat", 42], 896, 267, [0, 8, 1, null]], [8, ["number", 6], 955, 267, [7, null]]] ';
examples['card-29'] = '[[0, ["start2", 196], 267, 110, [null, 1, null]], [1, "setpensize", 285, 156, [0, 2, 3]], [2, ["number", 25], 387, 156, [1, null]], [3, ["repeat", 145], 285, 198, [1, 4, 5, null]], [4, ["number", 40], 344, 198, [3, null]], [5, "penup", 303, 240, [3, 7]], [6, "pendown", 303, 488, [20, 9]], [7, ["setxy2", 40], 303, 282, [5, 14, 18, 20]], [8, ["number", 50], 415, 282, [14, null]], [9, "forward", 303, 530, [6, 10, null]], [10, ["number", 1], 374, 530, [9, null]], [11, ["random", 0], 415, 324, [14, 12, 13, null]], [12, ["number", -4], 501, 324, [11, null]], [13, ["number", 4], 501, 366, [11, null]], [14, ["product2", 0], 361, 282, [7, 8, 11]], [15, ["random", 0], 415, 446, [18, 16, 17, null]], [16, ["number", -3], 501, 446, [15, null]], [17, ["number", 3], 501, 488, [15, null]], [18, ["product2", 0], 361, 404, [7, 19, 15]], [19, ["number", 50], 415, 404, [18, null]], [20, ["vspace", 0], 303, 446, [7, 6]]]';
examples['card-30'] = '[[0, ["start2", 105], 652, 1040, [null, 46, null]], [1, ["storein", 0], 223, 248, [46, 2, 3, 30]], [2, ["string", "sides"], 291, 248, [1, null]], [3, ["number", 8], 291, 290, [1, null]], [4, ["hat", 177], 1180, 761, [null, 5, 23]], [5, ["string", "action"], 1025, 173, [4, null]], [6, "stack", 223, 416, [30, 7, null]], [7, ["string", "action"], 281, 416, [6, null]], [8, ["hat", 93], 652, 734, [null, 9, 14]], [9, ["string", "polygon"], 508, 346, [8, null]], [10, ["repeat", 21], 470, 430, [14, 11, 13, 15]], [11, "box", 529, 430, [10, 12, null]], [12, ["string", "sides"], 584, 430, [11, null]], [13, "forward", 488, 472, [10, 33, 16]], [14, "startfill", 470, 388, [8, 10]], [15, "stopfill", 470, 574, [10, null]], [16, "right", 488, 514, [13, 18, null]], [17, ["number", 360], 616, 514, [18, null]], [18, ["division2", 0], 546, 514, [16, 17, 19]], [19, "box", 640, 556, [18, 20, null]], [20, ["string", "sides"], 695, 556, [19, null]], [21, "stack", 1005, 257, [23, 22, 25]], [22, ["string", "polygon"], 1063, 257, [21, null]], [23, ["repeat", 147], 987, 215, [4, 24, 21, null]], [24, ["number", 6], 1046, 215, [23, null]], [25, ["storein", 0], 1005, 299, [21, 26, 48, 40]], [26, ["string", "sides"], 1073, 299, [25, null]], [27, ["number", 1], 1170, 383, [48, null]], [28, "box", 1146, 341, [48, 29, null]], [29, ["string", "sides"], 1201, 341, [28, null]], [30, ["storein", 0], 223, 332, [1, 31, 32, 6]], [31, ["string", "length"], 291, 332, [30, null]], [32, ["number", 200], 291, 374, [30, null]], [33, "box", 559, 472, [13, 34, null]], [34, ["string", "length"], 614, 472, [33, null]], [35, ["storein", 0], 1005, 425, [40, 36, 49, 45]], [36, ["string", "length"], 1073, 425, [35, null]], [37, ["number", 25], 1170, 509, [49, null]], [38, "box", 1146, 467, [49, 39, null]], [39, ["string", "length"], 1201, 467, [38, null]], [40, ["vspace", 0], 1005, 383, [25, 35]], [41, "setcolor", 1005, 551, [45, 44, null]], [42, ["number", 15], 1136, 593, [44, null]], [43, "color", 1136, 551, [44, null]], [44, ["plus2", 0], 1082, 551, [41, 43, 42]], [45, ["vspace", 0], 1005, 509, [35, 41]], [46, "setcolor", 223, 206, [0, 47, 1]], [47, ["number", 0], 300, 206, [46, null]], [48, ["minus2", 0], 1073, 341, [25, 28, 27]], [49, ["minus2", 0], 1073, 467, [35, 38, 37]]] ';
examples['card-31'] = '[[0, ["start2", 105], 730, 780, [null, 31, null]], [1, ["repeat", 42], 776, 276, [10, 2, 3, 8]], [2, ["number", 3], 835, 276, [1, null]], [3, ["arc", 0], 794, 318, [1, 4, 5, 6]], [4, ["number", 90], 852, 318, [3, null]], [5, ["number", 50], 852, 360, [3, null]], [6, "left", 794, 402, [3, 7, null]], [7, ["number", 90], 852, 402, [6, null]], [8, "left", 776, 462, [1, 9, null]], [9, ["number", 180], 834, 462, [8, null]], [10, ["repeat", 93], 758, 234, [16, 11, 1, null]], [11, ["number", 2], 817, 234, [10, null]], [12, ["repeat", 21], 458, 234, [20, 13, 18, null]], [13, ["number", 12], 517, 234, [12, null]], [14, "right", 476, 318, [18, 15, null]], [15, ["number", 30], 534, 318, [14, null]], [16, ["hat", 123], 1040, 780, [null, 17, 10]], [17, ["string", "action"], 796, 192, [16, null]], [18, "stack", 476, 276, [12, 19, 14]], [19, ["string", "action"], 534, 276, [18, null]], [20, ["hat", 51], 480, 780, [null, 21, 12]], [21, ["string", "bumps"], 496, 192, [20, null]], [22, "stack", 198, 310, [27, 23, 29]], [23, ["string", "bumps"], 256, 310, [22, null]], [24, "stack", 198, 436, [28, 25, null]], [25, ["string", "bumps"], 256, 436, [24, null]], [26, "red", 275, 394, [28, null]], [27, "setcolor", 198, 268, [31, 33, 22]], [28, "setcolor", 198, 394, [29, 26, 24]], [29, "setpensize", 198, 352, [22, 30, 28]], [30, ["number", 5], 300, 352, [29, null]], [31, "setpensize", 198, 226, [0, 32, 27]], [32, ["number", 20], 300, 226, [31, null]], [33, "yellow", 275, 268, [27, null]]] ';
examples['card-32'] = '[[0, ["start2", 151], 480, 720, [null, 15, null]], [1, "forward", 876, 320, [9, 2, 3]], [2, ["number", 100], 947, 320, [1, null]], [3, "right", 876, 362, [1, 4, null]], [4, ["number", 90], 934, 362, [3, null]], [5, "seth", 858, 194, [13, 6, 11]], [6, ["random", 0], 957, 194, [5, 7, 8, null]], [7, ["number", 0], 1043, 194, [6, null]], [8, ["number", 90.0], 1043, 236, [6, null]], [9, ["repeat", 21], 858, 278, [11, 10, 1, 12]], [10, ["number", 4], 917, 278, [9, null]], [11, "startfill", 858, 236, [5, 9]], [12, "stopfill", 858, 422, [9, null]], [13, ["hat", 114], 1040, 740, [null, 14, 5, null]], [14, ["string", "action"], 896, 152, [13, null]], [15, ["forever", 125], 498, 166, [0, 27, null]], [16, "stack", 516, 450, [18, 17, null]], [17, ["string", "action"], 574, 450, [16, null]], [18, "pendown", 516, 408, [20, 16]], [19, "penup", 516, 242, [27, 20]], [20, ["setxy2", 20], 516, 284, [19, 21, 22, 18]], [21, ["random", 0], 574, 284, [20, 24, 25, null]], [22, ["random", 0], 574, 366, [20, 23, 26, null]], [23, "bottompos", 660, 366, [22, null]], [24, "leftpos", 660, 284, [21, null]], [25, "rightpos", 660, 326, [21, null]], [26, "toppos", 660, 408, [22, null]], [27, "setcolor", 516, 200, [15, 28, 19]], [28, ["random", 0], 593, 200, [27, 29, 30, null]], [29, ["number", 0], 679, 200, [28, null]], [30, ["number", 100], 679, 242, [28, null]]]';

