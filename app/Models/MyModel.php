<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MyModel extends Model
{

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['from'] ?? null, function ($query, $from) {
            $query->where('created_at', '>=', $from);
        })->when($filters['to'] ?? null, function ($query, $to) {
            $query->where('created_at', '<=', $to);
        });
    }


    public function scopeSearch($query, $filters, array|string $searchOn='name')
    {
        $query->when($filters['search']??false, function ($query, $search) use ($searchOn) {
            if (is_array($searchOn)) {
                foreach ($searchOn as $column) {
                    $query->orWhere($column, 'like', '%'.$search.'%');
                }
            } else {
                $query->where($searchOn, 'like', '%'.$search.'%');
            }
        });
    }

    public static function scopeSort($query, array $filters)
    {
        $query->when($filters['sort'] ?? null, function ($query) use ($filters) {
            return $filters['order'] === 'asc' ? $query->orderBy($filters['sort']) : $query->orderByDesc($filters['sort']);
        });
    }
}
