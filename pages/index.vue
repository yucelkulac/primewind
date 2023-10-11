<template>
    <div class="container">
        <div>
            {{ labelData }}
        </div>
        <InputText v-model="newLabel" @keyup.enter="addLabel" />
        <div class="card flex flex-wrap gap-2">
            <Chip v-for="(item,index) in labelData" :key="index" :label="item.name" :removable="item.removable" @remove="(event) => removeLabel(item.name,event)" />
        </div>
        <div class="flex items-center justify-start my-16 grid grid-cols-3 gap-4">
            <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Şehir Seçiniz"
                :maxSelectedLabels="3" class="col-span-12" />
            <InputNumber v-model="value1" inputId="integeronly" />
            <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" placeholder="Sayı Giriniz" />
            <InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" />
            <InputNumber v-model="value4" inputId="minmax" :min="0" :max="100" />
            <InputNumber v-model="value"  :min="0" :max="100" prefix="%" />
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div class="h-32 rounded-lg bg-gray-200"></div>
            <div class="h-32 rounded-lg bg-gray-200"></div>
            <div class="h-32 rounded-lg bg-gray-200"></div>
        </div>
        <List />
        <Panel header="Header" class="my-8">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
        <Accordion :activeIndex="0">
            <AccordionTab header="Header I">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script setup>
const newLabel = ref('');
const addLabel = () => {
    let issetLabel = labelData.value.find((item) => item.name == newLabel.value);
    if(!issetLabel){
        labelData.value.push(
            {
                name : newLabel.value,
                removable : true
            }
        );
    }
    else{
        alert('Etiket daha önce eklenmiş');
    }
    newLabel.value = ''
}
const removeLabel = (data,event) => {
    console.log(data)
    event;
    console.log(labelData.value.filter(item => {item.name != data}))
    labelData.value = labelData.value.filter(item => { return item.name != data })
}
const labelData = ref([
    {
        name : 'Yücel'
    },
    {
        name : 'Bilal'
    }
])
const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const items = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    alert('1')
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    alert('2')
                }
            }
        ]
    }
]);

</script>