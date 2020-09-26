<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AdResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'location' => $this->location,
            'price' => $this->price,
            'description' => $this->description,
            'utilities' => $this->utilities,
            'pool' => $this->pool,
            'fitness_center' => $this->fitness_center,
            'parking' => $this->parking,
            'free_parking' => $this->free_parking,
            'wheelchair_access' => $this->wheelchair_access,
            'wifi' => $this->wifi,
            'ac' => $this->ac,
            'nearby_grocery_store' => $this->nearby_grocery_store,
            'subway' => $this->subway,
            'bus' => $this->bus,
            'train' => $this->train,
            'occupant_gender' => $this->occupant_gender,
            'rental_type' => $this->rental_type,
            'rental_term' => $this->rental_term,
            'bedrooms_number' => $this->bedrooms_number,
            'baths_number' => $this->baths_number,
            'furnished' => $this->furnished,
            'pet_friendly' => $this->pet_friendly,
            'private_bath' => $this->private_bath,
            'smoking_allowed' => $this->smoking_allowed,
            'party_room' => $this->party_room,
            'security_on_site' => $this->security_on_site,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'type' => $this->type
        ];
    }
}
