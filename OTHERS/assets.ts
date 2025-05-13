import baseApi from "./config";

export interface AssetResponse {
  id: number;
  uuid: string;
  file_key: string;
  content_type: string;
  filename: string;
  signed_url: string;
}

export async function getAssetById(assetId: number): Promise<{
  success: boolean;
  data?: AssetResponse;
  error?: any;
}> {
  try {
    const response = await baseApi.get(`templates/${assetId}`);
    if (response.status !== 200) {
      return {
        success: false,
        error: `Erro: ${response.statusText}`,
      };
    }

    const data: AssetResponse = response.data.asset;
    return {
      success: true,
      data,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error?.message || "Erro desconhecido ao buscar asset.",
    };
  }
}
