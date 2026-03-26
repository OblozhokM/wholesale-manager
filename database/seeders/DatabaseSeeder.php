<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('clients')->insert([
            ['client_id' => 1, 'company_name' => 'ТОВ "ТехноСвіт"', 'address' => 'м. Київ, вул. Шевченка, 10', 'phone' => '+380501112233', 'contact_person' => 'Олександр Іванов'],
            ['client_id' => 2, 'company_name' => 'ПП "Глобал Трейд"', 'address' => 'м. Львів, пл. Ринок, 5', 'phone' => '+380674445566', 'contact_person' => 'Марія Коваль'],
            ['client_id' => 3, 'company_name' => 'ТОВ "БудМайстер"', 'address' => 'м. Одеса, вул. Дерибасівська, 1', 'phone' => '+380937778899', 'contact_person' => 'Дмитро Сидорчук'],
            ['client_id' => 4, 'company_name' => 'ФОП Петренко', 'address' => 'м. Харків, пр. Науки, 12', 'phone' => '+380661234567', 'contact_person' => 'Олена Петренко'],
        ]);

        DB::table('delivery_types')->insert([
            ['dtype_id' => 1, 'type_name' => 'Самовивіз', 'base_description' => 'Забір зі складу клієнтом'],
            ['dtype_id' => 2, 'type_name' => 'Кур\'єрська доставка', 'base_description' => 'Доставка до дверей'],
            ['dtype_id' => 3, 'type_name' => 'Нова Пошта', 'base_description' => 'Доставка у відділення'],
        ]);

        DB::table('products')->insert([
            ['product_id' => 1, 'name' => 'Ноутбук Lenovo', 'current_price' => 24000.00, 'delivery_available' => 1],
            ['product_id' => 2, 'name' => 'Мишка бездротова', 'current_price' => 900.00, 'delivery_available' => 1],
            ['product_id' => 3, 'name' => 'Монітор Dell 24"', 'current_price' => 7200.00, 'delivery_available' => 0],
            ['product_id' => 4, 'name' => 'Серверна шафа', 'current_price' => 15000.00, 'delivery_available' => 0],
            ['product_id' => 5, 'name' => 'USB-хаб', 'current_price' => 450.00, 'delivery_available' => 1],
        ]);

        DB::table('orders')->insert([
            ['order_id' => 1, 'client_id' => 1, 'order_date' => '2023-11-01', 'selected_dtype_id' => 1, 'fixed_delivery_cost' => 150.00, 'total_amount' => 24900.00],
            ['order_id' => 2, 'client_id' => 2, 'order_date' => '2023-11-05', 'selected_dtype_id' => 2, 'fixed_delivery_cost' => 0.00, 'total_amount' => 900.00],
            ['order_id' => 3, 'client_id' => 1, 'order_date' => '2023-11-10', 'selected_dtype_id' => 1, 'fixed_delivery_cost' => 200.00, 'total_amount' => 7200.00],
            ['order_id' => 4, 'client_id' => 3, 'order_date' => '2023-11-12', 'selected_dtype_id' => 1, 'fixed_delivery_cost' => 500.00, 'total_amount' => 15000.00],
        ]);

        DB::table('order_items')->insert([
            ['item_id' => 1, 'order_id' => 1, 'product_id' => 1, 'quantity' => 1, 'price_per_unit' => 24000.00],
            ['item_id' => 2, 'order_id' => 1, 'product_id' => 2, 'quantity' => 1, 'price_per_unit' => 900.00],
            ['item_id' => 3, 'order_id' => 2, 'product_id' => 2, 'quantity' => 1, 'price_per_unit' => 900.00],
            ['item_id' => 4, 'order_id' => 3, 'product_id' => 3, 'quantity' => 1, 'price_per_unit' => 7200.00],
            ['item_id' => 5, 'order_id' => 4, 'product_id' => 4, 'quantity' => 1, 'price_per_unit' => 15000.00],
        ]);

        DB::table('product_delivery_options')->insert([
            ['option_id' => 1, 'product_id' => 1, 'dtype_id' => 3, 'delivery_price' => 150.00, 'speed_days' => 2],
            ['option_id' => 2, 'product_id' => 1, 'dtype_id' => 2, 'delivery_price' => 300.00, 'speed_days' => 1],
            ['option_id' => 3, 'product_id' => 2, 'dtype_id' => 3, 'delivery_price' => 70.00, 'speed_days' => 3],
            ['option_id' => 4, 'product_id' => 3, 'dtype_id' => 2, 'delivery_price' => 500.00, 'speed_days' => 1],
            ['option_id' => 5, 'product_id' => 5, 'dtype_id' => 1, 'delivery_price' => 0.00, 'speed_days' => 0],
        ]);
    }
}