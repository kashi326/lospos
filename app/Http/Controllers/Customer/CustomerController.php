<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Requests\Customers\CustomerRequest;
use App\Models\Customer;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        $customers = Customer::search($request->only(['search']),['name','email','phone'])
            ->sort($request->only(['sort', 'order']))
            ->paginate($request->get('perPage', 10));

        return response()->render('Customers/Index', [
            'customers' => $customers->getCollection()->map(fn($customer, $index)=>array_merge($customer->toArray(), ['sNo'=>getSNo($index)])),
            'total' => $customers->total(),
            'perPage' => $customers->perPage(),
            'currentPage' => $customers->currentPage(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CustomerRequest $request
     * @return RedirectResponse
     */
    public function store(CustomerRequest $request): RedirectResponse
    {
        $data = $request->validated();
        if ($request->post('id')) {
            $data['created_by'] = auth()->id();
        }else {
            $data['updated_by'] = auth()->id();
        }
        Customer::updateOrCreate(
            ['id'=>$request->post('id')],
            $data
        );
        return redirect()->back()->with('success', 'Customer saved successfully');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return RedirectResponse
     */
    public function destroy(int $id): RedirectResponse
    {
        Customer::destroy($id);
        return redirect()->back()->with('success', 'Customer deleted successfully');
    }
}
