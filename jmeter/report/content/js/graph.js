/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 3210.0, "series": [{"data": [[0.0, 31.0], [0.1, 31.0], [0.2, 31.0], [0.3, 31.0], [0.4, 31.0], [0.5, 33.0], [0.6, 33.0], [0.7, 33.0], [0.8, 33.0], [0.9, 33.0], [1.0, 35.0], [1.1, 35.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 35.0], [1.6, 35.0], [1.7, 35.0], [1.8, 35.0], [1.9, 35.0], [2.0, 35.0], [2.1, 35.0], [2.2, 35.0], [2.3, 35.0], [2.4, 35.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 38.0], [3.1, 38.0], [3.2, 38.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 39.0], [4.1, 39.0], [4.2, 39.0], [4.3, 39.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 40.0], [5.1, 40.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 41.0], [5.6, 41.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 42.0], [6.1, 42.0], [6.2, 42.0], [6.3, 42.0], [6.4, 42.0], [6.5, 44.0], [6.6, 44.0], [6.7, 44.0], [6.8, 44.0], [6.9, 44.0], [7.0, 45.0], [7.1, 45.0], [7.2, 45.0], [7.3, 45.0], [7.4, 45.0], [7.5, 47.0], [7.6, 47.0], [7.7, 47.0], [7.8, 47.0], [7.9, 47.0], [8.0, 49.0], [8.1, 49.0], [8.2, 49.0], [8.3, 49.0], [8.4, 49.0], [8.5, 53.0], [8.6, 53.0], [8.7, 53.0], [8.8, 53.0], [8.9, 53.0], [9.0, 56.0], [9.1, 56.0], [9.2, 56.0], [9.3, 56.0], [9.4, 56.0], [9.5, 89.0], [9.6, 89.0], [9.7, 89.0], [9.8, 89.0], [9.9, 89.0], [10.0, 93.0], [10.1, 93.0], [10.2, 93.0], [10.3, 93.0], [10.4, 93.0], [10.5, 94.0], [10.6, 94.0], [10.7, 94.0], [10.8, 94.0], [10.9, 94.0], [11.0, 97.0], [11.1, 97.0], [11.2, 97.0], [11.3, 97.0], [11.4, 97.0], [11.5, 98.0], [11.6, 98.0], [11.7, 98.0], [11.8, 98.0], [11.9, 98.0], [12.0, 102.0], [12.1, 102.0], [12.2, 102.0], [12.3, 102.0], [12.4, 102.0], [12.5, 112.0], [12.6, 112.0], [12.7, 112.0], [12.8, 112.0], [12.9, 112.0], [13.0, 117.0], [13.1, 117.0], [13.2, 117.0], [13.3, 117.0], [13.4, 117.0], [13.5, 121.0], [13.6, 121.0], [13.7, 121.0], [13.8, 121.0], [13.9, 121.0], [14.0, 128.0], [14.1, 128.0], [14.2, 128.0], [14.3, 128.0], [14.4, 128.0], [14.5, 130.0], [14.6, 130.0], [14.7, 130.0], [14.8, 130.0], [14.9, 130.0], [15.0, 136.0], [15.1, 136.0], [15.2, 136.0], [15.3, 136.0], [15.4, 136.0], [15.5, 137.0], [15.6, 137.0], [15.7, 137.0], [15.8, 137.0], [15.9, 137.0], [16.0, 138.0], [16.1, 138.0], [16.2, 138.0], [16.3, 138.0], [16.4, 138.0], [16.5, 139.0], [16.6, 139.0], [16.7, 139.0], [16.8, 139.0], [16.9, 139.0], [17.0, 140.0], [17.1, 140.0], [17.2, 140.0], [17.3, 140.0], [17.4, 140.0], [17.5, 143.0], [17.6, 143.0], [17.7, 143.0], [17.8, 143.0], [17.9, 143.0], [18.0, 145.0], [18.1, 145.0], [18.2, 145.0], [18.3, 145.0], [18.4, 145.0], [18.5, 147.0], [18.6, 147.0], [18.7, 147.0], [18.8, 147.0], [18.9, 147.0], [19.0, 149.0], [19.1, 149.0], [19.2, 149.0], [19.3, 149.0], [19.4, 149.0], [19.5, 150.0], [19.6, 150.0], [19.7, 150.0], [19.8, 150.0], [19.9, 150.0], [20.0, 153.0], [20.1, 153.0], [20.2, 153.0], [20.3, 153.0], [20.4, 153.0], [20.5, 153.0], [20.6, 153.0], [20.7, 153.0], [20.8, 153.0], [20.9, 153.0], [21.0, 155.0], [21.1, 155.0], [21.2, 155.0], [21.3, 155.0], [21.4, 155.0], [21.5, 158.0], [21.6, 158.0], [21.7, 158.0], [21.8, 158.0], [21.9, 158.0], [22.0, 158.0], [22.1, 158.0], [22.2, 158.0], [22.3, 158.0], [22.4, 158.0], [22.5, 161.0], [22.6, 161.0], [22.7, 161.0], [22.8, 161.0], [22.9, 161.0], [23.0, 162.0], [23.1, 162.0], [23.2, 162.0], [23.3, 162.0], [23.4, 162.0], [23.5, 164.0], [23.6, 164.0], [23.7, 164.0], [23.8, 164.0], [23.9, 164.0], [24.0, 164.0], [24.1, 164.0], [24.2, 164.0], [24.3, 164.0], [24.4, 164.0], [24.5, 165.0], [24.6, 165.0], [24.7, 165.0], [24.8, 165.0], [24.9, 165.0], [25.0, 165.0], [25.1, 165.0], [25.2, 165.0], [25.3, 165.0], [25.4, 165.0], [25.5, 166.0], [25.6, 166.0], [25.7, 166.0], [25.8, 166.0], [25.9, 166.0], [26.0, 166.0], [26.1, 166.0], [26.2, 166.0], [26.3, 166.0], [26.4, 166.0], [26.5, 167.0], [26.6, 167.0], [26.7, 167.0], [26.8, 167.0], [26.9, 167.0], [27.0, 167.0], [27.1, 167.0], [27.2, 167.0], [27.3, 167.0], [27.4, 167.0], [27.5, 168.0], [27.6, 168.0], [27.7, 168.0], [27.8, 168.0], [27.9, 168.0], [28.0, 170.0], [28.1, 170.0], [28.2, 170.0], [28.3, 170.0], [28.4, 170.0], [28.5, 171.0], [28.6, 171.0], [28.7, 171.0], [28.8, 171.0], [28.9, 171.0], [29.0, 171.0], [29.1, 171.0], [29.2, 171.0], [29.3, 171.0], [29.4, 171.0], [29.5, 172.0], [29.6, 172.0], [29.7, 172.0], [29.8, 172.0], [29.9, 172.0], [30.0, 172.0], [30.1, 172.0], [30.2, 172.0], [30.3, 172.0], [30.4, 172.0], [30.5, 173.0], [30.6, 173.0], [30.7, 173.0], [30.8, 173.0], [30.9, 173.0], [31.0, 173.0], [31.1, 173.0], [31.2, 173.0], [31.3, 173.0], [31.4, 173.0], [31.5, 173.0], [31.6, 173.0], [31.7, 173.0], [31.8, 173.0], [31.9, 173.0], [32.0, 174.0], [32.1, 174.0], [32.2, 174.0], [32.3, 174.0], [32.4, 174.0], [32.5, 175.0], [32.6, 175.0], [32.7, 175.0], [32.8, 175.0], [32.9, 175.0], [33.0, 175.0], [33.1, 175.0], [33.2, 175.0], [33.3, 175.0], [33.4, 175.0], [33.5, 176.0], [33.6, 176.0], [33.7, 176.0], [33.8, 176.0], [33.9, 176.0], [34.0, 176.0], [34.1, 176.0], [34.2, 176.0], [34.3, 176.0], [34.4, 176.0], [34.5, 177.0], [34.6, 177.0], [34.7, 177.0], [34.8, 177.0], [34.9, 177.0], [35.0, 177.0], [35.1, 177.0], [35.2, 177.0], [35.3, 177.0], [35.4, 177.0], [35.5, 177.0], [35.6, 177.0], [35.7, 177.0], [35.8, 177.0], [35.9, 177.0], [36.0, 177.0], [36.1, 177.0], [36.2, 177.0], [36.3, 177.0], [36.4, 177.0], [36.5, 178.0], [36.6, 178.0], [36.7, 178.0], [36.8, 178.0], [36.9, 178.0], [37.0, 178.0], [37.1, 178.0], [37.2, 178.0], [37.3, 178.0], [37.4, 178.0], [37.5, 179.0], [37.6, 179.0], [37.7, 179.0], [37.8, 179.0], [37.9, 179.0], [38.0, 179.0], [38.1, 179.0], [38.2, 179.0], [38.3, 179.0], [38.4, 179.0], [38.5, 180.0], [38.6, 180.0], [38.7, 180.0], [38.8, 180.0], [38.9, 180.0], [39.0, 180.0], [39.1, 180.0], [39.2, 180.0], [39.3, 180.0], [39.4, 180.0], [39.5, 180.0], [39.6, 180.0], [39.7, 180.0], [39.8, 180.0], [39.9, 180.0], [40.0, 180.0], [40.1, 180.0], [40.2, 180.0], [40.3, 180.0], [40.4, 180.0], [40.5, 180.0], [40.6, 180.0], [40.7, 180.0], [40.8, 180.0], [40.9, 180.0], [41.0, 180.0], [41.1, 180.0], [41.2, 180.0], [41.3, 180.0], [41.4, 180.0], [41.5, 181.0], [41.6, 181.0], [41.7, 181.0], [41.8, 181.0], [41.9, 181.0], [42.0, 181.0], [42.1, 181.0], [42.2, 181.0], [42.3, 181.0], [42.4, 181.0], [42.5, 182.0], [42.6, 182.0], [42.7, 182.0], [42.8, 182.0], [42.9, 182.0], [43.0, 182.0], [43.1, 182.0], [43.2, 182.0], [43.3, 182.0], [43.4, 182.0], [43.5, 182.0], [43.6, 182.0], [43.7, 182.0], [43.8, 182.0], [43.9, 182.0], [44.0, 183.0], [44.1, 183.0], [44.2, 183.0], [44.3, 183.0], [44.4, 183.0], [44.5, 183.0], [44.6, 183.0], [44.7, 183.0], [44.8, 183.0], [44.9, 183.0], [45.0, 183.0], [45.1, 183.0], [45.2, 183.0], [45.3, 183.0], [45.4, 183.0], [45.5, 183.0], [45.6, 183.0], [45.7, 183.0], [45.8, 183.0], [45.9, 183.0], [46.0, 185.0], [46.1, 185.0], [46.2, 185.0], [46.3, 185.0], [46.4, 185.0], [46.5, 185.0], [46.6, 185.0], [46.7, 185.0], [46.8, 185.0], [46.9, 185.0], [47.0, 185.0], [47.1, 185.0], [47.2, 185.0], [47.3, 185.0], [47.4, 185.0], [47.5, 185.0], [47.6, 185.0], [47.7, 185.0], [47.8, 185.0], [47.9, 185.0], [48.0, 187.0], [48.1, 187.0], [48.2, 187.0], [48.3, 187.0], [48.4, 187.0], [48.5, 187.0], [48.6, 187.0], [48.7, 187.0], [48.8, 187.0], [48.9, 187.0], [49.0, 188.0], [49.1, 188.0], [49.2, 188.0], [49.3, 188.0], [49.4, 188.0], [49.5, 188.0], [49.6, 188.0], [49.7, 188.0], [49.8, 188.0], [49.9, 188.0], [50.0, 189.0], [50.1, 189.0], [50.2, 189.0], [50.3, 189.0], [50.4, 189.0], [50.5, 190.0], [50.6, 190.0], [50.7, 190.0], [50.8, 190.0], [50.9, 190.0], [51.0, 190.0], [51.1, 190.0], [51.2, 190.0], [51.3, 190.0], [51.4, 190.0], [51.5, 190.0], [51.6, 190.0], [51.7, 190.0], [51.8, 190.0], [51.9, 190.0], [52.0, 190.0], [52.1, 190.0], [52.2, 190.0], [52.3, 190.0], [52.4, 190.0], [52.5, 192.0], [52.6, 192.0], [52.7, 192.0], [52.8, 192.0], [52.9, 192.0], [53.0, 192.0], [53.1, 192.0], [53.2, 192.0], [53.3, 192.0], [53.4, 192.0], [53.5, 193.0], [53.6, 193.0], [53.7, 193.0], [53.8, 193.0], [53.9, 193.0], [54.0, 193.0], [54.1, 193.0], [54.2, 193.0], [54.3, 193.0], [54.4, 193.0], [54.5, 194.0], [54.6, 194.0], [54.7, 194.0], [54.8, 194.0], [54.9, 194.0], [55.0, 195.0], [55.1, 195.0], [55.2, 195.0], [55.3, 195.0], [55.4, 195.0], [55.5, 197.0], [55.6, 197.0], [55.7, 197.0], [55.8, 197.0], [55.9, 197.0], [56.0, 199.0], [56.1, 199.0], [56.2, 199.0], [56.3, 199.0], [56.4, 199.0], [56.5, 199.0], [56.6, 199.0], [56.7, 199.0], [56.8, 199.0], [56.9, 199.0], [57.0, 200.0], [57.1, 200.0], [57.2, 200.0], [57.3, 200.0], [57.4, 200.0], [57.5, 201.0], [57.6, 201.0], [57.7, 201.0], [57.8, 201.0], [57.9, 201.0], [58.0, 210.0], [58.1, 210.0], [58.2, 210.0], [58.3, 210.0], [58.4, 210.0], [58.5, 211.0], [58.6, 211.0], [58.7, 211.0], [58.8, 211.0], [58.9, 211.0], [59.0, 242.0], [59.1, 242.0], [59.2, 242.0], [59.3, 242.0], [59.4, 242.0], [59.5, 247.0], [59.6, 247.0], [59.7, 247.0], [59.8, 247.0], [59.9, 247.0], [60.0, 278.0], [60.1, 278.0], [60.2, 278.0], [60.3, 278.0], [60.4, 278.0], [60.5, 311.0], [60.6, 311.0], [60.7, 311.0], [60.8, 311.0], [60.9, 311.0], [61.0, 315.0], [61.1, 315.0], [61.2, 315.0], [61.3, 315.0], [61.4, 315.0], [61.5, 328.0], [61.6, 328.0], [61.7, 328.0], [61.8, 328.0], [61.9, 328.0], [62.0, 333.0], [62.1, 333.0], [62.2, 333.0], [62.3, 333.0], [62.4, 333.0], [62.5, 337.0], [62.6, 337.0], [62.7, 337.0], [62.8, 337.0], [62.9, 337.0], [63.0, 340.0], [63.1, 340.0], [63.2, 340.0], [63.3, 340.0], [63.4, 340.0], [63.5, 348.0], [63.6, 348.0], [63.7, 348.0], [63.8, 348.0], [63.9, 348.0], [64.0, 363.0], [64.1, 363.0], [64.2, 363.0], [64.3, 363.0], [64.4, 363.0], [64.5, 383.0], [64.6, 383.0], [64.7, 383.0], [64.8, 383.0], [64.9, 383.0], [65.0, 397.0], [65.1, 397.0], [65.2, 397.0], [65.3, 397.0], [65.4, 397.0], [65.5, 400.0], [65.6, 400.0], [65.7, 400.0], [65.8, 400.0], [65.9, 400.0], [66.0, 408.0], [66.1, 408.0], [66.2, 408.0], [66.3, 408.0], [66.4, 408.0], [66.5, 413.0], [66.6, 413.0], [66.7, 413.0], [66.8, 413.0], [66.9, 413.0], [67.0, 417.0], [67.1, 417.0], [67.2, 417.0], [67.3, 417.0], [67.4, 417.0], [67.5, 421.0], [67.6, 421.0], [67.7, 421.0], [67.8, 421.0], [67.9, 421.0], [68.0, 444.0], [68.1, 444.0], [68.2, 444.0], [68.3, 444.0], [68.4, 444.0], [68.5, 452.0], [68.6, 452.0], [68.7, 452.0], [68.8, 452.0], [68.9, 452.0], [69.0, 455.0], [69.1, 455.0], [69.2, 455.0], [69.3, 455.0], [69.4, 455.0], [69.5, 456.0], [69.6, 456.0], [69.7, 456.0], [69.8, 456.0], [69.9, 456.0], [70.0, 462.0], [70.1, 462.0], [70.2, 462.0], [70.3, 462.0], [70.4, 462.0], [70.5, 464.0], [70.6, 464.0], [70.7, 464.0], [70.8, 464.0], [70.9, 464.0], [71.0, 493.0], [71.1, 493.0], [71.2, 493.0], [71.3, 493.0], [71.4, 493.0], [71.5, 493.0], [71.6, 493.0], [71.7, 493.0], [71.8, 493.0], [71.9, 493.0], [72.0, 496.0], [72.1, 496.0], [72.2, 496.0], [72.3, 496.0], [72.4, 496.0], [72.5, 497.0], [72.6, 497.0], [72.7, 497.0], [72.8, 497.0], [72.9, 497.0], [73.0, 501.0], [73.1, 501.0], [73.2, 501.0], [73.3, 501.0], [73.4, 501.0], [73.5, 502.0], [73.6, 502.0], [73.7, 502.0], [73.8, 502.0], [73.9, 502.0], [74.0, 507.0], [74.1, 507.0], [74.2, 507.0], [74.3, 507.0], [74.4, 507.0], [74.5, 515.0], [74.6, 515.0], [74.7, 515.0], [74.8, 515.0], [74.9, 515.0], [75.0, 530.0], [75.1, 530.0], [75.2, 530.0], [75.3, 530.0], [75.4, 530.0], [75.5, 536.0], [75.6, 536.0], [75.7, 536.0], [75.8, 536.0], [75.9, 536.0], [76.0, 541.0], [76.1, 541.0], [76.2, 541.0], [76.3, 541.0], [76.4, 541.0], [76.5, 547.0], [76.6, 547.0], [76.7, 547.0], [76.8, 547.0], [76.9, 547.0], [77.0, 554.0], [77.1, 554.0], [77.2, 554.0], [77.3, 554.0], [77.4, 554.0], [77.5, 568.0], [77.6, 568.0], [77.7, 568.0], [77.8, 568.0], [77.9, 568.0], [78.0, 570.0], [78.1, 570.0], [78.2, 570.0], [78.3, 570.0], [78.4, 570.0], [78.5, 574.0], [78.6, 574.0], [78.7, 574.0], [78.8, 574.0], [78.9, 574.0], [79.0, 628.0], [79.1, 628.0], [79.2, 628.0], [79.3, 628.0], [79.4, 628.0], [79.5, 639.0], [79.6, 639.0], [79.7, 639.0], [79.8, 639.0], [79.9, 639.0], [80.0, 643.0], [80.1, 643.0], [80.2, 643.0], [80.3, 643.0], [80.4, 643.0], [80.5, 648.0], [80.6, 648.0], [80.7, 648.0], [80.8, 648.0], [80.9, 648.0], [81.0, 648.0], [81.1, 648.0], [81.2, 648.0], [81.3, 648.0], [81.4, 648.0], [81.5, 663.0], [81.6, 663.0], [81.7, 663.0], [81.8, 663.0], [81.9, 663.0], [82.0, 672.0], [82.1, 672.0], [82.2, 672.0], [82.3, 672.0], [82.4, 672.0], [82.5, 675.0], [82.6, 675.0], [82.7, 675.0], [82.8, 675.0], [82.9, 675.0], [83.0, 676.0], [83.1, 676.0], [83.2, 676.0], [83.3, 676.0], [83.4, 676.0], [83.5, 684.0], [83.6, 684.0], [83.7, 684.0], [83.8, 684.0], [83.9, 684.0], [84.0, 692.0], [84.1, 692.0], [84.2, 692.0], [84.3, 692.0], [84.4, 692.0], [84.5, 700.0], [84.6, 700.0], [84.7, 700.0], [84.8, 700.0], [84.9, 700.0], [85.0, 710.0], [85.1, 710.0], [85.2, 710.0], [85.3, 710.0], [85.4, 710.0], [85.5, 714.0], [85.6, 714.0], [85.7, 714.0], [85.8, 714.0], [85.9, 714.0], [86.0, 714.0], [86.1, 714.0], [86.2, 714.0], [86.3, 714.0], [86.4, 714.0], [86.5, 744.0], [86.6, 744.0], [86.7, 744.0], [86.8, 744.0], [86.9, 744.0], [87.0, 749.0], [87.1, 749.0], [87.2, 749.0], [87.3, 749.0], [87.4, 749.0], [87.5, 758.0], [87.6, 758.0], [87.7, 758.0], [87.8, 758.0], [87.9, 758.0], [88.0, 761.0], [88.1, 761.0], [88.2, 761.0], [88.3, 761.0], [88.4, 761.0], [88.5, 764.0], [88.6, 764.0], [88.7, 764.0], [88.8, 764.0], [88.9, 764.0], [89.0, 767.0], [89.1, 767.0], [89.2, 767.0], [89.3, 767.0], [89.4, 767.0], [89.5, 786.0], [89.6, 786.0], [89.7, 786.0], [89.8, 786.0], [89.9, 786.0], [90.0, 793.0], [90.1, 793.0], [90.2, 793.0], [90.3, 793.0], [90.4, 793.0], [90.5, 795.0], [90.6, 795.0], [90.7, 795.0], [90.8, 795.0], [90.9, 795.0], [91.0, 803.0], [91.1, 803.0], [91.2, 803.0], [91.3, 803.0], [91.4, 803.0], [91.5, 821.0], [91.6, 821.0], [91.7, 821.0], [91.8, 821.0], [91.9, 821.0], [92.0, 852.0], [92.1, 852.0], [92.2, 852.0], [92.3, 852.0], [92.4, 852.0], [92.5, 881.0], [92.6, 881.0], [92.7, 881.0], [92.8, 881.0], [92.9, 881.0], [93.0, 972.0], [93.1, 972.0], [93.2, 972.0], [93.3, 972.0], [93.4, 972.0], [93.5, 1016.0], [93.6, 1016.0], [93.7, 1016.0], [93.8, 1016.0], [93.9, 1016.0], [94.0, 1017.0], [94.1, 1017.0], [94.2, 1017.0], [94.3, 1017.0], [94.4, 1017.0], [94.5, 1026.0], [94.6, 1026.0], [94.7, 1026.0], [94.8, 1026.0], [94.9, 1026.0], [95.0, 1136.0], [95.1, 1136.0], [95.2, 1136.0], [95.3, 1136.0], [95.4, 1136.0], [95.5, 1144.0], [95.6, 1144.0], [95.7, 1144.0], [95.8, 1144.0], [95.9, 1144.0], [96.0, 1199.0], [96.1, 1199.0], [96.2, 1199.0], [96.3, 1199.0], [96.4, 1199.0], [96.5, 1299.0], [96.6, 1299.0], [96.7, 1299.0], [96.8, 1299.0], [96.9, 1299.0], [97.0, 1302.0], [97.1, 1302.0], [97.2, 1302.0], [97.3, 1302.0], [97.4, 1302.0], [97.5, 1432.0], [97.6, 1432.0], [97.7, 1432.0], [97.8, 1432.0], [97.9, 1432.0], [98.0, 1527.0], [98.1, 1527.0], [98.2, 1527.0], [98.3, 1527.0], [98.4, 1527.0], [98.5, 1881.0], [98.6, 1881.0], [98.7, 1881.0], [98.8, 1881.0], [98.9, 1881.0], [99.0, 1927.0], [99.1, 1927.0], [99.2, 1927.0], [99.3, 1927.0], [99.4, 1927.0], [99.5, 3210.0], [99.6, 3210.0], [99.7, 3210.0], [99.8, 3210.0], [99.9, 3210.0]], "isOverall": false, "label": "GET Posts", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 90.0, "series": [{"data": [[0.0, 24.0], [600.0, 11.0], [700.0, 13.0], [200.0, 7.0], [800.0, 4.0], [3200.0, 1.0], [900.0, 1.0], [1000.0, 3.0], [1100.0, 3.0], [300.0, 10.0], [1200.0, 1.0], [1300.0, 1.0], [1400.0, 1.0], [1500.0, 1.0], [100.0, 90.0], [400.0, 15.0], [1800.0, 1.0], [1900.0, 1.0], [500.0, 12.0]], "isOverall": false, "label": "GET Posts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 146.0, "series": [{"data": [[0.0, 146.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 50.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 6.565000000000002, "minX": 1.78507734E12, "maxY": 6.565000000000002, "series": [{"data": [[1.78507734E12, 6.565000000000002]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78507734E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 125.41176470588235, "minX": 1.0, "maxY": 681.8333333333333, "series": [{"data": [[1.0, 681.8333333333333], [2.0, 318.0], [4.0, 607.6249999999999], [8.0, 342.5824175824175], [9.0, 125.41176470588235], [5.0, 383.1111111111111], [3.0, 471.5], [6.0, 457.47058823529414], [7.0, 304.3333333333334]], "isOverall": false, "label": "GET Posts", "isController": false}, {"data": [[6.565000000000002, 376.4400000000001]], "isOverall": false, "label": "GET Posts-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 9.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 450.0, "minX": 1.78507734E12, "maxY": 95821.06666666667, "series": [{"data": [[1.78507734E12, 95821.06666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78507734E12, 450.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78507734E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 376.4400000000001, "minX": 1.78507734E12, "maxY": 376.4400000000001, "series": [{"data": [[1.78507734E12, 376.4400000000001]], "isOverall": false, "label": "GET Posts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78507734E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 304.77, "minX": 1.78507734E12, "maxY": 304.77, "series": [{"data": [[1.78507734E12, 304.77]], "isOverall": false, "label": "GET Posts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78507734E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 8.899999999999999, "minX": 1.78507734E12, "maxY": 8.899999999999999, "series": [{"data": [[1.78507734E12, 8.899999999999999]], "isOverall": false, "label": "GET Posts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78507734E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 31.0, "minX": 1.78507734E12, "maxY": 3210.0, "series": [{"data": [[1.78507734E12, 3210.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78507734E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78507734E12, 792.3000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78507734E12, 1926.5400000000004]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78507734E12, 188.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78507734E12, 1130.4999999999986]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78507734E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 117.0, "minX": 1.0, "maxY": 721.0, "series": [{"data": [[8.0, 701.5], [2.0, 717.0], [39.0, 117.0], [12.0, 164.0], [3.0, 570.0], [15.0, 192.0], [4.0, 626.0], [1.0, 721.0], [5.0, 446.5], [20.0, 180.5], [22.0, 188.5], [23.0, 183.0], [26.0, 189.5], [7.0, 645.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 39.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 115.0, "minX": 1.0, "maxY": 525.5, "series": [{"data": [[8.0, 525.5], [2.0, 520.5], [39.0, 115.0], [12.0, 154.5], [3.0, 493.0], [15.0, 185.0], [4.0, 433.0], [1.0, 455.5], [5.0, 375.0], [20.0, 177.0], [22.0, 187.0], [23.0, 183.0], [26.0, 178.5], [7.0, 452.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 39.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.78507734E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.78507734E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78507734E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.78507734E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.78507734E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78507734E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.78507734E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.78507734E12, 3.3333333333333335]], "isOverall": false, "label": "GET Posts-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78507734E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.78507734E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.78507734E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78507734E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

