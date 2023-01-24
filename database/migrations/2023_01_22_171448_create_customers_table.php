<?php

use App\Enums\GenderEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique()->index();
            $table->string('phone', 25);
            $table->enum('gender', GenderEnum::getValues());
            $table->mediumText('address')->comment('Address');
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('zip', 10)->nullable();
            $table->string('country')->nullable();
            $table->mediumText('notes')->nullable();
            $table->string('status', 10)->nullable();
            $table->foreignId('created_by')->nullable()->unsigned()->constrained('users')->onDelete('set null');
            $table->foreignId('updated_by')->nullable()->unsigned()->constrained('users')->onDelete('set null');
            $table->foreignId('deleted_by')->nullable()->unsigned()->constrained('users')->onDelete('set null');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
};
