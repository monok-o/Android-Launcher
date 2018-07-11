/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

let appList = document.querySelector('.app-list')

const app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false)
    },

    onDeviceReady: () => {
        //app.isLauncher()
        app.getInstalledApps()
    },

    isLauncher: () => {
        let isLauncher = Kiosk.isSetAsLauncher( () => { return true } )

        console.log(isLauncher)

        if (isLauncher !== true) {
            Kiosk.switchLauncher()
        }
    },

    getInstalledApps: () => {

        Applist.getAllApps((app_list) => {
            
            for (i in app_list) {

                appList.innerHTML += `<a href="#" onclick="app.launchApp('${app_list[i].id}')"><img src="${app_list[i].img}"></img></a>`
                console.log(app_list[i].id)
            }

        })

    },

    launchApp: (id) => {
        window.plugins.launcher.launch( {packageName: id} )
    }

}

app.initialize();