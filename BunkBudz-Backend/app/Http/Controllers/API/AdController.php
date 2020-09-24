<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Ad;
use App\Http\Requests\AdRequest;


class AdController extends Controller
{
    public function create(AdRequest $request)
    {
        $ad = Ad::create([
            'user_id' -> $request->user_id,
            'location' -> $request->location,
            'price' -> $request->price,
            'description' -> $request->description,
            'utilities' -> $request->utilities,
            'pool' -> $request->pool,
            'fitness_center' -> $request->fitness_center,
            'parking' -> $request->parking,
            'free_parking' -> $request->free_parking,
            'wheelchair_access' -> $request->wheelchair_access,
            'wifi' -> $request->wifi,
            'ac' -> $request->ac,
            'nearby_grocery_store' -> $request->nearby_grocery_store,
            'subway' -> $request->subway,
            'bus' -> $request->bus,
            'occupant_gender' -> $request->occupant_gender,
            'rental_type' -> $request->rental_type,
            'rental_term' -> $request->rental_term,
            'furnished' -> $request->furnished,
            'pet_friendly' -> $request->pet_friendly,
            'private_bath' -> $request->private_bath,
            'smoking_allowed' -> $request->smoking_allowed,
            'party_room' -> $request->party_room,
            'security_on_site' -> $request->security_on_site,
            'start_date' -> $request->start_date,
            'end_date' -> $request->end_date,
            'type' -> $request->type,
            'bedrooms_number' -> $request->bedrooms_number,
            'baths_number' -> $request->baths_number
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Ad Created Successfully',
            'ad' => $ad
        ]);
    }
}
