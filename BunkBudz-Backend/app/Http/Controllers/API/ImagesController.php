<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ImagesRequest;
use App\Http\Resources\ImagesResource;
use App\Image;

class ImagesController extends Controller
{
    public function create(ImagesRequest $request) {
        $image = Image::create([
            'id' => $request->id,
            'ad_id' => $request->ad_id,
            'image' => $request->image
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Image created successfully',
            'image' => $image
        ]);
    }

    public function show($image) {
        return new ImagesResource(
            Image::find($image)
        );
    }
}
