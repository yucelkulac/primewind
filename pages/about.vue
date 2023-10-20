<template>
    <div class="container my-20">
        {{ $t('welcome') }}
        <div class="card flex justify-content-center">
            <Dropdown v-model="selectedLang" :options="languages" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
        </div>
        {{ selectedLang }}
        <div class="md:grids-col-2 grid md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4">
        <div class="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
            <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
            <div class="rounded-xl border bg-card text-card-foreground shadow">
                <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 class="tracking-tight text-sm font-normal">Total Revenue</h3>
                </div>
                <div class="p-6 pt-0">
                <div class="text-2xl font-bold">$15,231.89</div>
                <p class="text-xs text-muted-foreground">+20.1% from last month</p>
                <div class="h-[80px]">
                    <div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;" width="302.515625" height="80">
                    <div class="recharts-wrapper" role="region" style="position: relative; cursor: default; width: 303px; height: 80px;">
                        <svg class="recharts-surface" width="303" height="80" viewBox="0 0 303 80">
                        <title></title>
                        <desc></desc>
                        <defs>
                            <clipPath id="recharts4-clip">
                            <rect x="10" y="5" height="75" width="283"></rect>
                            </clipPath>
                        </defs>
                        <g class="recharts-layer recharts-line">
                            <path stroke-width="2" stroke="#3182bd" fill="none" width="283" height="75" class="recharts-curve recharts-line-curve" stroke-dasharray="306.34661865234375px 0px" d="M10,52.143C23.476,46.779,36.952,41.415,50.429,41.415C63.905,41.415,77.381,52.679,90.857,54.821C104.333,56.964,117.81,56.964,131.286,58.036C144.762,59.107,158.238,61.25,171.714,61.25C185.19,61.25,198.667,56.18,212.143,54.286C225.619,52.391,239.095,52.818,252.571,49.882C266.048,46.946,279.524,28.016,293,9.085" style="stroke: var(--theme-primary); --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                            <g class="recharts-layer"></g>
                            <g class="recharts-layer recharts-line-dots" role="img">
                            <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="283" height="75" cx="10" cy="52.14285714285714" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                            <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="283" height="75" cx="50.42857142857143" cy="41.41517857142857" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                            <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="283" height="75" cx="90.85714285714286" cy="54.821428571428584" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                            <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="283" height="75" cx="131.28571428571428" cy="58.035714285714285" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                            <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="283" height="75" cx="171.71428571428572" cy="61.25" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                            <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="283" height="75" cx="212.14285714285717" cy="54.285714285714285" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                            <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="283" height="75" cx="252.57142857142858" cy="49.88214285714285" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                            <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="283" height="75" cx="293" cy="9.08482142857143" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                            </g>
                        </g>
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="rounded-xl border bg-card text-card-foreground shadow">
                <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 class="tracking-tight text-sm font-normal">Subscriptions</h3>
                </div>
                <div class="p-6 pt-0">
                <div class="text-2xl font-bold">+2350</div>
                <p class="text-xs text-muted-foreground">+180.1% from last month</p>
                <div class="mt-4 h-[80px]">
                    <div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;" width="302.53125" height="80">
                    <div class="recharts-wrapper" role="region" style="position: relative; cursor: default; width: 303px; height: 80px;">
                        <svg class="recharts-surface" width="303" height="80" viewBox="0 0 303 80">
                        <title></title>
                        <desc></desc>
                        <defs>
                            <clipPath id="recharts7-clip">
                            <rect x="5" y="5" height="70" width="293"></rect>
                            </clipPath>
                        </defs>
                        <g class="recharts-layer recharts-bar">
                            <g class="recharts-layer recharts-bar-rectangles">
                            <g class="recharts-layer">
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                <path width="29" height="56" x="8.6625" y="19" radius="0" class="recharts-rectangle" d="M 8.6625,19 h 29 v 56 h -29 Z" style="fill: var(--theme-primary); opacity: 1; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                <path width="29" height="70" x="45.2875" y="5" radius="0" class="recharts-rectangle" d="M 45.2875,5 h 29 v 70 h -29 Z" style="fill: var(--theme-primary); opacity: 1; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                <path width="29" height="46.666666666666664" x="81.9125" y="28.333333333333336" radius="0" class="recharts-rectangle" d="M 81.9125,28.333333333333336 h 29 v 46.666666666666664 h -29 Z" style="fill: var(--theme-primary); opacity: 1; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                <path width="29" height="64.86666666666666" x="118.5375" y="10.13333333333334" radius="0" class="recharts-rectangle" d="M 118.5375,10.13333333333334 h 29 v 64.86666666666666 h -29 Z" style="fill: var(--theme-primary); opacity: 1; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                <path width="29" height="44.1" x="155.1625" y="30.9" radius="0" class="recharts-rectangle" d="M 155.1625,30.9 h 29 v 44.1 h -29 Z" style="fill: var(--theme-primary); opacity: 1; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                <path width="29" height="55.766666666666666" x="191.7875" y="19.233333333333334" radius="0" class="recharts-rectangle" d="M 191.7875,19.233333333333334 h 29 v 55.766666666666666 h -29 Z" style="fill: var(--theme-primary); opacity: 1; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                <path width="29" height="64.86666666666666" x="228.4125" y="10.13333333333334" radius="0" class="recharts-rectangle" d="M 228.4125,10.13333333333334 h 29 v 64.86666666666666 h -29 Z" style="fill: var(--theme-primary); opacity: 1; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                <path width="29" height="44.1" x="265.0375" y="30.9" radius="0" class="recharts-rectangle" d="M 265.0375,30.9 h 29 v 44.1 h -29 Z" style="fill: var(--theme-primary); opacity: 1; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                            </g>
                            </g>
                            <g class="recharts-layer"></g>
                        </g>
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="grid gap-1 sm:grid-cols-[260px_1fr] md:hidden">
            <div class="rounded-xl border bg-card text-card-foreground shadow max-w-[260px]">
                <div class="p-1">
                <div class="rdp p-3">
                    <div class="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
                    <div class="space-y-4 rdp-caption_start rdp-caption_end">
                        <div class="flex justify-center pt-1 relative items-center">
                        <div class="text-sm font-medium" aria-live="polite" role="presentation" id="react-day-picker-1">June 2023</div>
                        <div class="space-x-1 flex items-center">
                            <button name="previous-month" aria-label="Go to previous month" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1" type="button">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                                <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                            </button>
                            <button name="next-month" aria-label="Go to next month" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1" type="button">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                                <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                            </button>
                        </div>
                        </div>
                        <table class="w-full border-collapse space-y-1" role="grid" aria-labelledby="react-day-picker-1">
                        <thead class="rdp-head">
                            <tr class="flex">
                            <th scope="col" class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]" aria-label="Sunday">Su</th>
                            <th scope="col" class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]" aria-label="Monday">Mo</th>
                            <th scope="col" class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]" aria-label="Tuesday">Tu</th>
                            <th scope="col" class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]" aria-label="Wednesday">We</th>
                            <th scope="col" class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]" aria-label="Thursday">Th</th>
                            <th scope="col" class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]" aria-label="Friday">Fr</th>
                            <th scope="col" class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]" aria-label="Saturday">Sa</th>
                            </tr>
                        </thead>
                        <tbody class="rdp-tbody" role="rowgroup">
                            <tr class="flex w-full mt-2">
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50" role="gridcell" tabindex="-1" type="button">28</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50" role="gridcell" tabindex="-1" type="button">29</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50" role="gridcell" tabindex="-1" type="button">30</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50" role="gridcell" tabindex="-1" type="button">31</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">1</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">2</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">3</button>
                            </td>
                            </tr>
                            <tr class="flex w-full mt-2">
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">4</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground day-range-start" role="gridcell" aria-selected="true" tabindex="0" type="button">5</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground" role="gridcell" aria-selected="true" tabindex="-1" type="button">6</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground" role="gridcell" aria-selected="true" tabindex="-1" type="button">7</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground" role="gridcell" aria-selected="true" tabindex="-1" type="button">8</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground" role="gridcell" aria-selected="true" tabindex="-1" type="button">9</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground" role="gridcell" aria-selected="true" tabindex="-1" type="button">10</button>
                            </td>
                            </tr>
                            <tr class="flex w-full mt-2">
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground" role="gridcell" aria-selected="true" tabindex="-1" type="button">11</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground" role="gridcell" aria-selected="true" tabindex="-1" type="button">12</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground day-range-end" role="gridcell" aria-selected="true" tabindex="-1" type="button">13</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">14</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">15</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">16</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">17</button>
                            </td>
                            </tr>
                            <tr class="flex w-full mt-2">
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">18</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">19</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">20</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">21</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">22</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">23</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">24</button>
                            </td>
                            </tr>
                            <tr class="flex w-full mt-2">
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">25</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">26</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">27</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">28</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">29</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">30</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50" role="gridcell" tabindex="-1" type="button">1</button>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="pt-3 sm:pl-2 sm:pt-0 xl:pl-4">
                <div class="rounded-xl border bg-card text-card-foreground shadow">
                <div class="flex flex-col space-y-1.5 p-6 pb-4">
                    <h3 class="font-semibold leading-none tracking-tight">Move Goal</h3>
                    <p class="text-sm text-muted-foreground">Set your daily activity goal.</p>
                </div>
                <div class="p-6 pt-0 pb-2">
                    <div class="flex items-center justify-center space-x-2">
                    <button class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 shrink-0 rounded-full">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                        <path d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Decrease</span>
                    </button>
                    <div class="flex-1 text-center">
                        <div class="text-5xl font-bold tracking-tighter">350</div>
                        <div class="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div>
                    </div>
                    <button class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 shrink-0 rounded-full">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                        <path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Increase</span>
                    </button>
                    </div>
                    <div class="my-3 h-[60px]">
                    <div class="recharts-responsive-container" width="0" height="0" style="width: 100%; height: 100%; min-width: 0px;"></div>
                    </div>
                </div>
                <div class="flex items-center p-6 pt-0">
                    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">Set Goal</button>
                </div>
                </div>
            </div>
            <div class="pt-3 sm:col-span-2 xl:pt-4">
                <div class="rounded-xl border bg-card text-card-foreground shadow">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="font-semibold leading-none tracking-tight">Exercise Minutes</h3>
                    <p class="text-sm text-muted-foreground">Your excercise minutes are ahead of where you normally are.</p>
                </div>
                <div class="p-6 pt-0 pb-4">
                    <div class="h-[200px]">
                    <div class="recharts-responsive-container" width="0" height="0" style="width: 100%; height: 100%; min-width: 0px;"></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div class="space-y-4 xl:space-y-4">
                <div class="rounded-xl border bg-card text-card-foreground shadow">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="font-semibold leading-none tracking-tight">Team Members</h3>
                    <p class="text-sm text-muted-foreground">Invite your team members to collaborate.</p>
                </div>
                <div class="p-6 pt-0 grid gap-6">
                    <div class="flex items-center justify-between space-x-4">
                    <div class="flex items-center space-x-4">
                        <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                        <img class="aspect-square h-full w-full" alt="Image" src="/avatars/01.png">
                        </span>
                        <div>
                        <p class="text-sm font-medium leading-none">Sofia Davis</p>
                        <p class="text-sm text-muted-foreground">m@example.com</p>
                        </div>
                    </div>
                    <button class="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs ml-auto" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rd:" data-state="closed">Owner <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4 text-muted-foreground">
                        <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    </div>
                    <div class="flex items-center justify-between space-x-4">
                    <div class="flex items-center space-x-4">
                        <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                        <img class="aspect-square h-full w-full" alt="Image" src="/avatars/02.png">
                        </span>
                        <div>
                        <p class="text-sm font-medium leading-none">Jackson Lee</p>
                        <p class="text-sm text-muted-foreground">p@example.com</p>
                        </div>
                    </div>
                    <button class="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs ml-auto" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:re:" data-state="closed">Member <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4 text-muted-foreground">
                        <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    </div>
                    <div class="flex items-center justify-between space-x-4">
                    <div class="flex items-center space-x-4">
                        <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                        <img class="aspect-square h-full w-full" alt="Image" src="/avatars/03.png">
                        </span>
                        <div>
                        <p class="text-sm font-medium leading-none">Isabella Nguyen</p>
                        <p class="text-sm text-muted-foreground">i@example.com</p>
                        </div>
                    </div>
                    <button class="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs ml-auto" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rf:" data-state="closed">Member <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4 text-muted-foreground">
                        <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
                <div class="rounded-xl border bg-card text-card-foreground shadow">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="font-semibold leading-none tracking-tight">Cookie Settings</h3>
                    <p class="text-sm text-muted-foreground">Manage your cookie settings here.</p>
                </div>
                <div class="p-6 pt-0 grid gap-6">
                    <div class="flex items-center justify-between space-x-4">
                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1" for="necessary">
                        <span>Strictly Necessary</span>
                        <span class="text-xs font-normal leading-snug text-muted-foreground">These cookies are essential in order to use the website and use its features.</span>
                    </label>
                    <button type="button" role="switch" aria-checked="true" data-state="checked" value="on" class="peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" id="necessary" aria-label="Necessary">
                        <span data-state="checked" class="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"></span>
                    </button>
                    </div>
                    <div class="flex items-center justify-between space-x-4">
                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1" for="functional">
                        <span>Functional Cookies</span>
                        <span class="text-xs font-normal leading-snug text-muted-foreground">These cookies allow the website to provide personalized functionality.</span>
                    </label>
                    <button type="button" role="switch" aria-checked="false" data-state="unchecked" value="on" class="peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" id="functional" aria-label="Functional">
                        <span data-state="unchecked" class="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"></span>
                    </button>
                    </div>
                    <div class="flex items-center justify-between space-x-4">
                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1" for="performance">
                        <span>Performance Cookies</span>
                        <span class="text-xs font-normal leading-snug text-muted-foreground">These cookies help to improve the performance of the website.</span>
                    </label>
                    <button type="button" role="switch" aria-checked="false" data-state="unchecked" value="on" class="peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" id="performance" aria-label="Performance">
                        <span data-state="unchecked" class="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"></span>
                    </button>
                    </div>
                </div>
                <div class="flex items-center p-6 pt-0">
                    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full">Save preferences</button>
                </div>
                </div>
                <div class="rounded-xl border bg-card text-card-foreground shadow">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="font-semibold leading-none tracking-tight">Payment Method</h3>
                    <p class="text-sm text-muted-foreground">Add a new payment method to your account.</p>
                </div>
                <div class="p-6 pt-0 grid gap-6">
                    <div role="radiogroup" aria-required="false" dir="ltr" class="grid grid-cols-3 gap-4" tabindex="0" style="outline: none;">
                    <div>
                        <button type="button" role="radio" aria-checked="false" data-state="unchecked" value="card" class="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer sr-only" id="card" aria-label="Card" tabindex="-1" data-radix-collection-item=""></button>
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&amp;:has([data-state=checked])]:border-primary" for="card">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mb-3 h-6 w-6">
                            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                            <path d="M2 10h20"></path>
                        </svg>Card </label>
                    </div>
                    <div>
                        <button type="button" role="radio" aria-checked="true" data-state="checked" value="paypal" class="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer sr-only" id="paypal" aria-label="Paypal" tabindex="0" data-radix-collection-item="">
                        <span data-state="checked" class="flex items-center justify-center">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 fill-primary">
                            <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                        </button>
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&amp;:has([data-state=checked])]:border-primary" for="paypal">
                        <svg role="img" viewBox="0 0 24 24" class="mb-3 h-6 w-6">
                            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" fill="currentColor"></path>
                        </svg>Paypal </label>
                    </div>
                    <div>
                        <button type="button" role="radio" aria-checked="false" data-state="unchecked" value="apple" class="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer sr-only" id="apple" aria-label="Apple" tabindex="-1" data-radix-collection-item=""></button>
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&amp;:has([data-state=checked])]:border-primary" for="apple">
                        <svg role="img" viewBox="0 0 24 24" class="mb-3 h-6 w-6">
                            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="currentColor"></path>
                        </svg>Apple </label>
                    </div>
                    </div>
                    <div class="grid gap-2">
                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="name">Name</label>
                    <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="name" placeholder="First Last">
                    </div>
                    <div class="grid gap-2">
                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="city">City</label>
                    <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="city" placeholder="">
                    </div>
                    <div class="grid gap-2">
                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="number">Card number</label>
                    <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="number" placeholder="">
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                    <div class="grid gap-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="month">Expires</label>
                        <button type="button" role="combobox" aria-controls="radix-:rj:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" class="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="month" aria-label="Month">
                        <span style="pointer-events: none;">Month</span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50" aria-hidden="true">
                            <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                        </button>
                    </div>
                    <div class="grid gap-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="year">Year</label>
                        <button type="button" role="combobox" aria-controls="radix-:rk:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" class="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="year" aria-label="Year">
                        <span style="pointer-events: none;">Year</span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50" aria-hidden="true">
                            <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                        </button>
                    </div>
                    <div class="grid gap-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="cvc">CVC</label>
                        <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="cvc" placeholder="CVC">
                    </div>
                    </div>
                </div>
                <div class="flex items-center p-6 pt-0">
                    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">Continue</button>
                </div>
                </div>
            </div>
            <div class="space-y-4 xl:space-y-4">
                <div class="rounded-xl border bg-card text-card-foreground shadow">
                <div class="space-y-1.5 p-6 flex flex-row items-center">
                    <div class="flex items-center space-x-4">
                    <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <img class="aspect-square h-full w-full" alt="Image" src="/avatars/01.png">
                    </span>
                    <div>
                        <p class="text-sm font-medium leading-none">Sofia Davis</p>
                        <p class="text-sm text-muted-foreground">m@example.com</p>
                    </div>
                    </div>
                    <button class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 ml-auto rounded-full" data-state="closed">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                        <path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">New message</span>
                    </button>
                </div>
                <div class="p-6 pt-0">
                    <div class="space-y-4">
                    <div class="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">Hi, how can I help you today?</div>
                    <div class="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">Hey, I'm having trouble with my account.</div>
                    <div class="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">What seems to be the problem?</div>
                    <div class="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">I can't log in.</div>
                    </div>
                </div>
                <div class="flex items-center p-6 pt-0">
                    <form class="flex w-full items-center space-x-2">
                    <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex-1" id="message" placeholder="Type your message..." autocomplete="off" value="">
                    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 w-9" type="submit" disabled="">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                        <path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Send</span>
                    </button>
                    </form>
                </div>
                </div>
                <div class="rounded-xl border bg-card text-card-foreground shadow">
                <div class="flex flex-col p-6 space-y-1">
                    <h3 class="font-semibold tracking-tight text-2xl">Create an account</h3>
                    <p class="text-sm text-muted-foreground">Enter your email below to create your account</p>
                </div>
                <div class="p-6 pt-0 grid gap-4">
                    <div class="grid grid-cols-2 gap-6">
                    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                        <svg viewBox="0 0 438.549 438.549" class="mr-2 h-4 w-4">
                        <path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
                        </svg>Github </button>
                    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                        <svg role="img" viewBox="0 0 24 24" class="mr-2 h-4 w-4">
                        <path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path>
                        </svg>Google </button>
                    </div>
                    <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                        <span class="w-full border-t"></span>
                    </div>
                    <div class="relative flex justify-center text-xs uppercase">
                        <span class="bg-card px-2 text-muted-foreground">Or continue with</span>
                    </div>
                    </div>
                    <div class="grid gap-2">
                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email</label>
                    <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="m@example.com" type="email">
                    </div>
                    <div class="grid gap-2">
                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="password">Password</label>
                    <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="password" type="password">
                    </div>
                </div>
                <div class="flex items-center p-6 pt-0">
                    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">Create account</button>
                </div>
                </div>
                <div class="hidden xl:block">
                <div class="rounded-xl border bg-card text-card-foreground shadow">
                    <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="font-semibold leading-none tracking-tight">Report an issue</h3>
                    <p class="text-sm text-muted-foreground">What area are you having problems with?</p>
                    </div>
                    <div class="p-6 pt-0 grid gap-6">
                    <div class="grid gap-4 sm:grid-cols-2">
                        <div class="grid gap-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="area-:rp:">Area</label>
                        <button type="button" role="combobox" aria-controls="radix-:rq:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="area-:rp:" aria-label="Area">
                            <span style="pointer-events: none;">Account</span>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50" aria-hidden="true">
                            <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        </div>
                        <div class="grid gap-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="security-level-:rp:">Security Level</label>
                        <button type="button" role="combobox" aria-controls="radix-:rr:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex h-9 items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 line-clamp-1 w-full truncate" id="security-level-:rp:" aria-label="Security Level">
                            <span style="pointer-events: none;">Severity 3</span>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50" aria-hidden="true">
                            <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        </div>
                    </div>
                    <div class="grid gap-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="subject-:rp:">Subject</label>
                        <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="subject-:rp:" placeholder="I need help with...">
                    </div>
                    <div class="grid gap-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="description-:rp:">Description</label>
                        <textarea class="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="description-:rp:" placeholder="Please include all information relevant to your issue."></textarea>
                    </div>
                    </div>
                    <div class="flex items-center p-6 pt-0 justify-between space-x-2">
                    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">Cancel</button>
                    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">Submit</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="space-y-4 lg:col-span-6 xl:col-span-5 xl:space-y-4">
            <div class="hidden gap-1 sm:grid-cols-[260px_1fr] md:grid">
            <div class="rounded-xl border bg-card text-card-foreground shadow max-w-[260px]">
                <div class="p-1">
                <div class="rdp p-3">
                    <div class="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
                    <div class="space-y-4 rdp-caption_start rdp-caption_end">
                        <div class="flex justify-center pt-1 relative items-center">
                        <div class="text-sm font-medium" aria-live="polite" role="presentation" id="react-day-picker-2">June 2023</div>
                        <div class="space-x-1 flex items-center">
                            <button name="previous-month" aria-label="Go to previous month" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1" type="button">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                                <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                            </button>
                            <button name="next-month" aria-label="Go to next month" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1" type="button">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                                <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                            </button>
                        </div>
                        </div>
                        <table class="w-full border-collapse space-y-1" role="grid" aria-labelledby="react-day-picker-2">
                        <thead class="rdp-head">
                            <tr class="flex">
                            <th scope="col" class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]" aria-label="Sunday">Su</th>
                            <th scope="col" class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]" aria-label="Monday">Mo</th>
                            <th scope="col" class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]" aria-label="Tuesday">Tu</th>
                            <th scope="col" class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]" aria-label="Wednesday">We</th>
                            <th scope="col" class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]" aria-label="Thursday">Th</th>
                            <th scope="col" class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]" aria-label="Friday">Fr</th>
                            <th scope="col" class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]" aria-label="Saturday">Sa</th>
                            </tr>
                        </thead>
                        <tbody class="rdp-tbody" role="rowgroup">
                            <tr class="flex w-full mt-2">
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50" role="gridcell" tabindex="-1" type="button">28</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50" role="gridcell" tabindex="-1" type="button">29</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50" role="gridcell" tabindex="-1" type="button">30</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50" role="gridcell" tabindex="-1" type="button">31</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">1</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">2</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">3</button>
                            </td>
                            </tr>
                            <tr class="flex w-full mt-2">
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">4</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground day-range-start" role="gridcell" aria-selected="true" tabindex="0" type="button">5</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground" role="gridcell" aria-selected="true" tabindex="-1" type="button">6</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground" role="gridcell" aria-selected="true" tabindex="-1" type="button">7</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground" role="gridcell" aria-selected="true" tabindex="-1" type="button">8</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground" role="gridcell" aria-selected="true" tabindex="-1" type="button">9</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground" role="gridcell" aria-selected="true" tabindex="-1" type="button">10</button>
                            </td>
                            </tr>
                            <tr class="flex w-full mt-2">
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground" role="gridcell" aria-selected="true" tabindex="-1" type="button">11</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-selected:bg-accent aria-selected:text-accent-foreground" role="gridcell" aria-selected="true" tabindex="-1" type="button">12</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground day-range-end" role="gridcell" aria-selected="true" tabindex="-1" type="button">13</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">14</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">15</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">16</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">17</button>
                            </td>
                            </tr>
                            <tr class="flex w-full mt-2">
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">18</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">19</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">20</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">21</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">22</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">23</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">24</button>
                            </td>
                            </tr>
                            <tr class="flex w-full mt-2">
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">25</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">26</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">27</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">28</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">29</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100" role="gridcell" tabindex="-1" type="button">30</button>
                            </td>
                            <td class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has(>.day-range-end)]:rounded-r-md [&amp;:has(>.day-range-start)]:rounded-l-md first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md" role="presentation">
                                <button name="day" class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50" role="gridcell" tabindex="-1" type="button">1</button>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="pt-3 sm:pl-2 sm:pt-0 xl:pl-3">
                <div class="rounded-xl border bg-card text-card-foreground shadow">
                <div class="flex flex-col space-y-1.5 p-6 pb-4">
                    <h3 class="font-semibold leading-none tracking-tight">Move Goal</h3>
                    <p class="text-sm text-muted-foreground">Set your daily activity goal.</p>
                </div>
                <div class="p-6 pt-0 pb-2">
                    <div class="flex items-center justify-center space-x-2">
                    <button class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 shrink-0 rounded-full">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                        <path d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Decrease</span>
                    </button>
                    <div class="flex-1 text-center">
                        <div class="text-5xl font-bold tracking-tighter">350</div>
                        <div class="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div>
                    </div>
                    <button class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 shrink-0 rounded-full">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                        <path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Increase</span>
                    </button>
                    </div>
                    <div class="my-3 h-[60px]">
                    <div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;" width="272.359375" height="60">
                        <div class="recharts-wrapper" role="region" style="position: relative; cursor: default; width: 272px; height: 60px;">
                        <svg class="recharts-surface" width="272" height="60" viewBox="0 0 272 60">
                            <title></title>
                            <desc></desc>
                            <defs>
                            <clipPath id="recharts12-clip">
                                <rect x="5" y="5" height="50" width="262"></rect>
                            </clipPath>
                            </defs>
                            <g class="recharts-layer recharts-bar">
                            <g class="recharts-layer recharts-bar-rectangles">
                                <g class="recharts-layer">
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                    <path width="16" height="50" x="7.015384615384615" y="5" radius="0" class="recharts-rectangle" d="M 7.015384615384615,5 h 16 v 50 h -16 Z" style="fill: var(--theme-primary); opacity: 0.2; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                    <path width="16" height="37.5" x="27.16923076923077" y="17.5" radius="0" class="recharts-rectangle" d="M 27.16923076923077,17.5 h 16 v 37.5 h -16 Z" style="fill: var(--theme-primary); opacity: 0.2; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                    <path width="16" height="25" x="47.323076923076925" y="30" radius="0" class="recharts-rectangle" d="M 47.323076923076925,30 h 16 v 25 h -16 Z" style="fill: var(--theme-primary); opacity: 0.2; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                    <path width="16" height="37.5" x="67.47692307692307" y="17.5" radius="0" class="recharts-rectangle" d="M 67.47692307692307,17.5 h 16 v 37.5 h -16 Z" style="fill: var(--theme-primary); opacity: 0.2; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                    <path width="16" height="25" x="87.63076923076923" y="30" radius="0" class="recharts-rectangle" d="M 87.63076923076923,30 h 16 v 25 h -16 Z" style="fill: var(--theme-primary); opacity: 0.2; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                    <path width="16" height="34.75" x="107.78461538461539" y="20.25" radius="0" class="recharts-rectangle" d="M 107.78461538461539,20.25 h 16 v 34.75 h -16 Z" style="fill: var(--theme-primary); opacity: 0.2; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                    <path width="16" height="23.624999999999996" x="127.93846153846154" y="31.375000000000004" radius="0" class="recharts-rectangle" d="M 127.93846153846154,31.375000000000004 h 16 v 23.624999999999996 h -16 Z" style="fill: var(--theme-primary); opacity: 0.2; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                    <path width="16" height="29.875" x="148.09230769230768" y="25.125" radius="0" class="recharts-rectangle" d="M 148.09230769230768,25.125 h 16 v 29.875 h -16 Z" style="fill: var(--theme-primary); opacity: 0.2; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                    <path width="16" height="37.5" x="168.24615384615385" y="17.5" radius="0" class="recharts-rectangle" d="M 168.24615384615385,17.5 h 16 v 37.5 h -16 Z" style="fill: var(--theme-primary); opacity: 0.2; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                    <path width="16" height="25" x="188.4" y="30" radius="0" class="recharts-rectangle" d="M 188.4,30 h 16 v 25 h -16 Z" style="fill: var(--theme-primary); opacity: 0.2; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                    <path width="16" height="34.75" x="208.55384615384617" y="20.25" radius="0" class="recharts-rectangle" d="M 208.55384615384617,20.25 h 16 v 34.75 h -16 Z" style="fill: var(--theme-primary); opacity: 0.2; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                    <path width="16" height="23.624999999999996" x="228.7076923076923" y="31.375000000000004" radius="0" class="recharts-rectangle" d="M 228.7076923076923,31.375000000000004 h 16 v 23.624999999999996 h -16 Z" style="fill: var(--theme-primary); opacity: 0.2; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                <g class="recharts-layer recharts-bar-rectangle" role="img">
                                    <path width="16" height="43.625" x="248.86153846153846" y="11.375" radius="0" class="recharts-rectangle" d="M 248.86153846153846,11.375 h 16 v 43.625 h -16 Z" style="fill: var(--theme-primary); opacity: 0.2; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                                </g>
                                </g>
                            </g>
                            <g class="recharts-layer"></g>
                            </g>
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="flex items-center p-6 pt-0">
                    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">Set Goal</button>
                </div>
                </div>
            </div>
            <div class="pt-3 sm:col-span-2 xl:pt-3">
                <div class="rounded-xl border bg-card text-card-foreground shadow">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="font-semibold leading-none tracking-tight">Exercise Minutes</h3>
                    <p class="text-sm text-muted-foreground">Your excercise minutes are ahead of where you normally are.</p>
                </div>
                <div class="p-6 pt-0 pb-4">
                    <div class="h-[200px]">
                    <div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;" width="548.34375" height="200">
                        <div class="recharts-wrapper" role="region" style="position: relative; cursor: default; width: 548px; height: 200px;">
                        <svg class="recharts-surface" width="548" height="200" viewBox="0 0 548 200">
                            <title></title>
                            <desc></desc>
                            <defs>
                            <clipPath id="recharts15-clip">
                                <rect x="10" y="5" height="195" width="528"></rect>
                            </clipPath>
                            </defs>
                            <g class="recharts-layer recharts-line">
                            <path stroke-width="2" stroke="#3182bd" fill="none" width="528" height="195" class="recharts-curve recharts-line-curve" stroke-dasharray="539.3883056640625px 0px" d="M10,122C39.333,128.5,68.667,135,98,141.5C127.333,148,156.667,161,186,161C215.333,161,244.667,145.79,274,145.79C303.333,145.79,332.667,163.145,362,163.145C391.333,163.145,420.667,158.595,450,153.395C479.333,148.195,508.667,140.07,538,131.945" style="stroke: var(--theme-primary); opacity: 0.25; --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                            <g class="recharts-layer"></g>
                            <g class="recharts-layer recharts-line-dots" role="img">
                                <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="528" height="195" cx="10" cy="122" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); opacity: 0.25; --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                                <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="528" height="195" cx="98" cy="141.5" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); opacity: 0.25; --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                                <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="528" height="195" cx="186" cy="161" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); opacity: 0.25; --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                                <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="528" height="195" cx="274" cy="145.79" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); opacity: 0.25; --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                                <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="528" height="195" cx="362" cy="163.14499999999998" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); opacity: 0.25; --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                                <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="528" height="195" cx="450" cy="153.39499999999998" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); opacity: 0.25; --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                                <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="528" height="195" cx="538" cy="131.94500000000002" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); opacity: 0.25; --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                            </g>
                            </g>
                            <g class="recharts-layer recharts-line">
                            <path stroke-width="2" stroke="#3182bd" fill="none" width="528" height="195" class="recharts-curve recharts-line-curve" stroke-dasharray="700.569580078125px 0px" d="M10,153.2C39.333,163.047,68.667,172.895,98,172.895C127.333,172.895,156.667,8.9,186,8.9C215.333,8.9,244.667,123.95,274,123.95C303.333,123.95,332.667,106.4,362,106.4C391.333,106.4,420.667,125.9,450,125.9C479.333,125.9,508.667,121.025,538,116.15" style="stroke: var(--theme-primary); --theme-primary: hsl(221.2 83.2% 53.3%);"></path>
                            <g class="recharts-layer"></g>
                            <g class="recharts-layer recharts-line-dots" role="img">
                                <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="528" height="195" cx="10" cy="153.2" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                                <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="528" height="195" cx="98" cy="172.89499999999998" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                                <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="528" height="195" cx="186" cy="8.900000000000004" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                                <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="528" height="195" cx="274" cy="123.95" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                                <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="528" height="195" cx="362" cy="106.4" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                                <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="528" height="195" cx="450" cy="125.9" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                                <circle r="3" stroke-width="2" stroke="#3182bd" fill="#fff" width="528" height="195" cx="538" cy="116.15000000000002" class="recharts-dot recharts-line-dot" style="stroke: var(--theme-primary); --theme-primary: hsl(221.2 83.2% 53.3%);"></circle>
                            </g>
                            </g>
                        </svg>
                        <div tabindex="-1" role="dialog" class="recharts-tooltip-wrapper" style="pointer-events: none; visibility: hidden; position: absolute; top: 0px; left: 0px;"></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="hidden md:block">
            <div class="rounded-xl border bg-card text-card-foreground shadow">
                <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="font-semibold leading-none tracking-tight">Payments</h3>
                <p class="text-sm text-muted-foreground">Manage your payments.</p>
                </div>
                <div class="p-6 pt-0">
                <div class="mb-4 flex items-center gap-4">
                    <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 max-w-sm" placeholder="Filter emails..." value="">
                    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-auto" type="button" id="radix-:rs:" aria-haspopup="menu" aria-expanded="false" data-state="closed">Columns <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4">
                        <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                    </button>
                </div>
                <div class="rounded-md border">
                    <div class="relative w-full overflow-auto">
                    <table class="w-full caption-bottom text-sm">
                        <thead class="[&amp;_tr]:border-b">
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" aria-label="Select all"></button>
                            </th>
                            <th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">Status</th>
                            <th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">Email <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4">
                                <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            </th>
                            <th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <div class="text-right">Amount</div>
                            </th>
                            <th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3"></th>
                        </tr>
                        </thead>
                        <tbody class="[&amp;_tr:last-child]:border-0">
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false">
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" aria-label="Select row"></button>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <div class="capitalize">success</div>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <div class="lowercase">ken99@yahoo.com</div>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <div class="text-right font-medium">$316.00</div>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0" type="button" id="radix-:ru:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                <span class="sr-only">Open menu</span>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                                <path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            </td>
                        </tr>
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false">
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" aria-label="Select row"></button>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <div class="capitalize">success</div>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <div class="lowercase">Abe45@gmail.com</div>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <div class="text-right font-medium">$242.00</div>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0" type="button" id="radix-:r10:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                <span class="sr-only">Open menu</span>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                                <path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            </td>
                        </tr>
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false">
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" aria-label="Select row"></button>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <div class="capitalize">processing</div>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <div class="lowercase">Monserrat44@gmail.com</div>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <div class="text-right font-medium">$837.00</div>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0" type="button" id="radix-:r12:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                <span class="sr-only">Open menu</span>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                                <path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            </td>
                        </tr>
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false">
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" aria-label="Select row"></button>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <div class="capitalize">success</div>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <div class="lowercase">Silas22@gmail.com</div>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <div class="text-right font-medium">$874.00</div>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0" type="button" id="radix-:r14:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                <span class="sr-only">Open menu</span>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                                <path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            </td>
                        </tr>
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false">
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" aria-label="Select row"></button>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <div class="capitalize">failed</div>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <div class="lowercase">carmella@hotmail.com</div>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <div class="text-right font-medium">$721.00</div>
                            </td>
                            <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] [&amp;:has([role=checkbox])]:pl-3">
                            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0" type="button" id="radix-:r16:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                <span class="sr-only">Open menu</span>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                                <path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <div class="flex items-center justify-end space-x-2 pt-4">
                    <div class="flex-1 text-sm text-muted-foreground">0 of 5 row(s) selected.</div>
                    <div class="space-x-2">
                    <button class="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs" disabled="">Previous</button>
                    <button class="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs" disabled="">Next</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="rounded-xl border bg-card text-card-foreground shadow">
            <div class="flex flex-col space-y-1.5 p-6 pb-3">
                <h3 class="font-semibold leading-none tracking-tight">Share this document</h3>
                <p class="text-sm text-muted-foreground">Anyone with the link can view this document.</p>
            </div>
            <div class="p-6 pt-0">
                <div class="flex space-x-2">
                <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only" for="link">Link</label>
                <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="link" readonly="" value="http://example.com/link/to/document">
                <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 shrink-0">Copy Link</button>
                </div>
                <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-4"></div>
                <div class="space-y-4">
                <h4 class="text-sm font-medium">People with access</h4>
                <div class="grid gap-6">
                    <div class="flex items-center justify-between space-x-4">
                    <div class="flex items-center space-x-4">
                        <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <img class="aspect-square h-full w-full" alt="Image" src="/avatars/03.png">
                        </span>
                        <div>
                        <p class="text-sm font-medium leading-none">Olivia Martin</p>
                        <p class="text-sm text-muted-foreground">m@example.com</p>
                        </div>
                    </div>
                    <button type="button" role="combobox" aria-controls="radix-:r18:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex h-9 items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ml-auto w-[110px]" aria-label="Edit">
                        <span style="pointer-events: none;">Can edit</span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50" aria-hidden="true">
                        <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    </div>
                    <div class="flex items-center justify-between space-x-4">
                    <div class="flex items-center space-x-4">
                        <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <img class="aspect-square h-full w-full" alt="Image" src="/avatars/05.png">
                        </span>
                        <div>
                        <p class="text-sm font-medium leading-none">Isabella Nguyen</p>
                        <p class="text-sm text-muted-foreground">b@example.com</p>
                        </div>
                    </div>
                    <button type="button" role="combobox" aria-controls="radix-:r19:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex h-9 items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ml-auto w-[110px]" aria-label="Edit">
                        <span style="pointer-events: none;">Can view</span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50" aria-hidden="true">
                        <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    </div>
                    <div class="flex items-center justify-between space-x-4">
                    <div class="flex items-center space-x-4">
                        <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <img class="aspect-square h-full w-full" alt="Image" src="/avatars/01.png">
                        </span>
                        <div>
                        <p class="text-sm font-medium leading-none">Sofia Davis</p>
                        <p class="text-sm text-muted-foreground">p@example.com</p>
                        </div>
                    </div>
                    <button type="button" role="combobox" aria-controls="radix-:r1a:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex h-9 items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ml-auto w-[110px]" aria-label="Edit">
                        <span style="pointer-events: none;">Can view</span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50" aria-hidden="true">
                        <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="xl:hidden">
            <div class="rounded-xl border bg-card text-card-foreground shadow">
                <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="font-semibold leading-none tracking-tight">Report an issue</h3>
                <p class="text-sm text-muted-foreground">What area are you having problems with?</p>
                </div>
                <div class="p-6 pt-0 grid gap-6">
                <div class="grid gap-4 sm:grid-cols-2">
                    <div class="grid gap-2">
                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="area-:r1b:">Area</label>
                    <button type="button" role="combobox" aria-controls="radix-:r1c:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="area-:r1b:" aria-label="Area">
                        <span style="pointer-events: none;">Billing</span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50" aria-hidden="true">
                        <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    </div>
                    <div class="grid gap-2">
                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="security-level-:r1b:">Security Level</label>
                    <button type="button" role="combobox" aria-controls="radix-:r1d:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex h-9 items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 line-clamp-1 w-full truncate" id="security-level-:r1b:" aria-label="Security Level">
                        <span style="pointer-events: none;">Severity 2</span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50" aria-hidden="true">
                        <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                <div class="grid gap-2">
                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="subject-:r1b:">Subject</label>
                    <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="subject-:r1b:" placeholder="I need help with...">
                </div>
                <div class="grid gap-2">
                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="description-:r1b:">Description</label>
                    <textarea class="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="description-:r1b:" placeholder="Please include all information relevant to your issue."></textarea>
                </div>
                </div>
                <div class="flex items-center p-6 pt-0 justify-between space-x-2">
                <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">Cancel</button>
                <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">Submit</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>

const { locale } = useI18n()
const activeLanguageCookie = useCookie('_lang');

locale.value = activeLanguageCookie.value ? activeLanguageCookie.value.value : 'tr';

console.log(locale.value);

const languages = ref([
    { name: 'English', value: 'en' },
    { name: 'Türkçe', value: 'tr' },
]);

const activeLang = computed(() => {
    if(activeLanguageCookie.value){
        console.log(1);
        return activeLanguageCookie.value
    }
    else{
        console.log(2);
        return languages.value.find(item => item.value == locale.value); 
    }
})
const selectedLang = ref(activeLang.value);



watch(selectedLang , (newValue) => {
    locale.value = newValue.value;
    activeLanguageCookie.value = selectedLang.value;
    console.log(activeLanguageCookie.value.value);
})

const { data : todosData, pending, error, refresh } = useFetch(`https://jsonplaceholder.typicode.com/posts`);

</script>

<style lang="scss" scoped>

</style>