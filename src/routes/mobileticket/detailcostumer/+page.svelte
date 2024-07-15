<!-- detailcostumer.svelte -->

<script lang="ts">
    import { onMount } from 'svelte';
    import CryptoJS from 'crypto-js';
  
    let decryptedData: any;
  
    // Fungsi untuk mendekripsi data
    function decryptData() {
      const encryptedData = sessionStorage.getItem('encryptedData');
      const secretKey = sessionStorage.getItem('key');
  
      if (encryptedData && secretKey) {
        try {
          const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
          const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
          decryptedData = JSON.parse(decryptedString);
        } catch (error) {
          console.error('Error decrypting data:', error);
        }
      } else {
        console.error('No encrypted data found or secret key missing.');
      }
    }
  
    onMount(() => {
      decryptData();
      console.log('Decrypted Data:', decryptedData);
    });
  </script>
  
  <h1>Detail Customer Page</h1>
  
  {#if decryptedData}
    <p>Decrypted Ticket: {decryptedData.decryptedTicket}</p>
    <p>Detail: {decryptedData.detail}</p>
    <p>Adult Count: {decryptedData.adultCount}</p>
    <p>Children Count: {decryptedData.childrenCount}</p>
    <p>Infant Count: {decryptedData.infantCount}</p>
    <p>Date: {decryptedData.date}</p>
  {:else}
    <p>Data not available.</p>
  {/if}
  