<?php

namespace App\Http\Requests\Customers;

use Illuminate\Foundation\Http\FormRequest;

class CustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'id' => 'sometimes|integer',
            'name' => ['required','string'],
            'email' => 'required|email',
            'phone' => ['required','string'],
            'gender' => ['required','string'],
            'address' => ['required','string'],
            'city' => 'string',
            'state' => 'string',
            'country' => 'string',
            'zip' => 'string',
            'notes'=>'string'
        ];
    }
}
