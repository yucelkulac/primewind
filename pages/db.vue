<template>
    <div class="container">
        <Toast 
            position="top-center"
            :pt="{
                content: { class: 'flex items-center justify-center' }
            }"
        />
        <ConfirmPopup></ConfirmPopup>
        <div class="py-20 flex items-center justify-center gap-4">
            <Button label="Yeni Ürün Ekle" @click="modalStatus.addProductModal = true" />
        </div>
        <div class="flex items-center justify-center flex-col gap-4 w-100">
            <p class="mb-4 font-semibold text-gray-700 text-xl text-left w-full">Ürün Listesi</p>
            <div class="w-full">
                <div v-if="product_list" class="grid grid-cols-3 gap-4">
                    <Card class="w-100" v-for="(product,index) in product_list" :key="index">
                        <template #title>{{ product.product_name }}</template>
                        <template #content>{{ product.price }}</template>
                        <template #footer>
                            <Button label="Ürünü sil" severity="secondary" class="mr-2" @click="deleteProductDialog($event,product)" />
                            <Button label="Düzenle" @click="showEditModal(product)" />
                        </template>
                    </Card>
                </div>
                <div class="grid grid-cols-3 gap-4" v-else>
                    <Skeleton v-for="index in 5" :key="index" width="10rem" height="4rem"></Skeleton>
                </div>
            </div>
        </div>
    </div>
    <Dialog v-model:visible="modalStatus.addProductModal" modal header="Yeni Ürün Ekle" :draggable="false" :style="{ width: '50vw' }">
        <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-2">
                <span>Ürün Adı</span>
                <InputText type="text" v-model="newProductValue.product_name" />
            </div>
            <div class="flex flex-col gap-2">
                <span>Ürün Fiyatı</span>
                <InputNumber v-model="newProductValue.price" inputId="integeronly" />
            </div>
            <div class="flex flex-col gap-2">
                <span>Kategori Seçiniz</span>
                <Dropdown v-model="newProductValue.category" :options="category_list" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
            </div>
            <Button class="col-span-2" label="Yeni Ürün Ekle" @click="addNewProduct" />
        </div>
    </Dialog>
    <Dialog v-model:visible="modalStatus.editProductModal" modal header="Ürün Bilgilerini Düzenle" :draggable="false" :style="{ width: '50vw' }">
        <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-2">
                <span>Ürün Adı</span>
                <InputText type="text" v-model="edit_product.product_name" />
            </div>
            <div class="flex flex-col gap-2">
                <span>Ürün Fiyatı</span>
                <InputNumber v-model="edit_product.price" inputId="integeronly" />
            </div>
            <Button class="col-span-2" label="Ürün Bilgilerini Güncelle" @click="editProduct(product)" />
        </div>
    </Dialog>
</template>

<script setup>
import { useForm } from 'vee-validate';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';

// Composable


const confirm = useConfirm();
const toast = useToast();

const supabase = useSupabaseClient()

const product_list = ref();
const category_list = ref();
const modalStatus = reactive({
    addProductModal : false,
    editProductModal : false
})
let newProductValue = reactive({
    product_name : '',
    price : '',
    category : '',
})
let edit_product = reactive({
    id : '',
    product_name : '',
    price : ''
});

const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const addProductSelectedCategory = computed(() => {
    return newProductValue.category.id
})


watch(modalStatus.addProductModal,(newValue) => {
    newValue == false ?  ((newProductValue.product_name = ''), (newProductValue.price = '')) : '';
})

const deleteProductDialog = (event,product) => {
    console.log(event.currentTarget);
    confirm.require({
        target: event.currentTarget,
        message: 'Ürünü silmek istediğinize emin misiniz ?',
        acceptClass: 'p-button-danger',
        accept: () => {
            deleteProduct(product.id);
            toast.add({
                severity: 'success',
                summary: 'Ürün Silindi !',
                detail: `${product.product_name} adlı ürün başarıyla silindi.`,
                life: 3000,
            });
        },
    });
};
const addNewProduct = async () => {
    if(inpuValidateHelper([newProductValue.product_name,newProductValue.price])){
        const { data } = await supabase
        .from('product')
        .insert([
            { 
                product_name: newProductValue.product_name,
                price: newProductValue.price
             },
        ])
        .select();
        newProductValue = {}
        modalStatus.addProductModal = false;
        await getProductList()
    }
    else{
        toast.add({
            severity: 'warn',
            summary: 'Ürün Bilgileri Eksik',
            life: 1000,
        });
    }
}
const showEditModal = (product) => {
    edit_product.id = product.id;
    edit_product.product_name = product.product_name;
    edit_product.price = product.price;

    modalStatus.editProductModal = true;
}
const editProduct = async () => {
    if(inpuValidateHelper([edit_product.product_name,edit_product.price])){
        const { data } = await supabase
            .from('product')
            .update(
                { 
                    product_name: edit_product.product_name,
                    price: edit_product.price
                }
            )
            .eq('id', edit_product.id)
            .select()
        edit_product = {};
        modalStatus.editProductModal = false;
        await getProductList()
    }
    else{
        toast.add({
            severity: 'warn',
            summary: 'Ürün Bilgileri Eksik',
            life: 1000,
        });
    }
}
const deleteProduct = async (id) => {
    const { error } = await supabase
    .from('product')
    .delete()
    .eq('id', id)
    await getProductList()
}
const getProductList = async () => {
    product_list.value = '';
    let { data: product, error } = await supabase
    .from('product')
    .select('*')
    .order('id', { ascending: false })

    product_list.value = product;
}
const getCategoryList = async () => {
    category_list.value = '';
    let { data: category, error } = await supabase
    .from('category')
    .select('*')
    .order('id', { ascending: false })

    category_list.value = category;
}
getCategoryList()
getProductList()





</script>

<style lang="scss" scoped>

</style>