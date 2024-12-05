<template>
  <label for="imageFile">Image</label>
  <button @click="startUpload">Upload Image</button>
  <input
    ref="imageFileBtn"
    @change.prevent="uploadImageFile($event.target?.files[0])"
    type="file"
    accept="image/png, image/jpeg"
    class="hidden"
  />
</template>

<script setup>
const supabase = useSupabaseClient();
const openUploadWindow = useTemplateRef("imageFileBtn");

function startUpload() {
  openUploadWindow.value.click();
}

async function uploadImageFile(avatarFile) {
  const { data, error } = await supabase.storage
    .from("images")
    .upload("avatar2.png", avatarFile, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.error("Error uploading file:", error.message);
    return;
  }
  console.log("File uploaded successfully:", data);
}
</script>

<style></style>
